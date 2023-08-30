import { Listbox, Transition } from '@headlessui/react'
import { useCheckout } from 'lib/context/checkout-context'
import { Address } from '@medusajs/medusa'
import Radio from 'modules/common/components/radio'
import ChevronDown from 'modules/common/icons/chevron-down'
import clsx from 'clsx'
import { isEqual, omit } from 'lodash'
import { Fragment, useMemo, useState } from 'react'
import { useWatch } from 'react-hook-form'

type AddressSelectProps = {
  addresses: Address[]
}

const AddressSelect = ({ addresses }: AddressSelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const { control, setSavedAddress } = useCheckout()

  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)

    if (savedAddress) {
      setSavedAddress(savedAddress)
    }

    setSelected(id)
  }

  const currentShippingAddress = useWatch({
    control,
    name: 'shipping_address',
  })

  const selectedAddress = useMemo(() => {
    for (const address of addresses) {
      const checkEquality = isEqual(
        omit(address, [
          'id',
          'created_at',
          'updated_at',
          'country',
          'deleted_at',
          'metadata',
          'customer_id',
          'country_code',
        ]),
        omit(currentShippingAddress, ['country_code'])
      )
      if (checkEquality) {
        console.log(address)
        return address
      }
    }
  }, [currentShippingAddress, addresses])

  return (
    <Listbox onChange={handleSelect} value={selected}>
      <div className="relative">
        <Listbox.Button className="text-base-regular relative flex w-full cursor-default items-center justify-between border border-gray-200 bg-white px-4 py-[10px] text-left focus:outline-none focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300">
          {({ open }) => (
            <>
              <span className="block truncate">
                {selectedAddress
                  ? selectedAddress.address_1
                  : 'Choose an address'}
              </span>
              <ChevronDown
                size={16}
                className={clsx({ 'rotate-180 transform': open })}
              />
            </>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="text-small-regular border-top-0 absolute z-20 max-h-60 w-full overflow-auto border border-gray-200 bg-white focus:outline-none sm:text-sm">
            {addresses.map((address) => {
              return (
                <Listbox.Option
                  key={address.id}
                  value={address.id}
                  className="relative cursor-default select-none py-4 pl-6 pr-10 hover:bg-gray-50"
                >
                  <div className="flex items-start gap-x-4">
                    <Radio checked={selected === address.id} />
                    <div className="flex flex-col">
                      <span className="text-base-semi text-left">
                        {address.first_name} {address.last_name}
                      </span>
                      {address.company && (
                        <span className="text-small-regular text-gray-700">
                          {address.company}
                        </span>
                      )}
                      <div className="text-base-regular mt-2 flex flex-col text-left">
                        <span>
                          {address.address_1}
                          {address.address_2 && (
                            <span>, {address.address_2}</span>
                          )}
                        </span>
                        <span>
                          {address.postal_code}, {address.city}
                        </span>
                        <span>
                          {address.province && `${address.province}, `}
                          {address.country_code?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default AddressSelect
