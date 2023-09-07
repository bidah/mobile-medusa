import { Text, View, Pressable } from 'design'
import { useStore } from 'lib/context/store-context'
import useToggleState from 'lib/hooks/use-toggle-state'
import { useRegions } from 'medusa-react'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { ActionSheetIOS } from 'react-native'
import clsx from 'clsx'
// import { ChevronDown } from 'react-native-heroicons/solid'

type CountryOption = {
  country: string
  region: string
  label: string
}

const CountrySelect = () => {
  const { countryCode, setRegion } = useStore()
  const { regions } = useRegions()
  const [current, setCurrent] = useState<CountryOption | undefined>(undefined)
  const { state, open, close } = useToggleState()

  const options: CountryOption[] | undefined = useMemo(() => {
    return regions
      ?.map((r) => {
        return r.countries.map((c) => ({
          country: c.iso_2,
          region: r.id,
          label: c.display_name,
        }))
      })
      .flat()
  }, [regions])

  useEffect(() => {
    if (countryCode) {
      const option = options?.find((o) => o.country === countryCode)
      setCurrent(option)
    }
  }, [countryCode, options])

  const handleChange = (option: CountryOption) => {
    setRegion(option.region, option.country)
    close()
  }

  // countryCode
  //   ? options?.find((o) => o.country === countryCode)
  //   : undefined

  // {options?.map((o, index) => {
  //   return (
  //     <Listbox.Option
  //       key={index}
  //       value={o}
  //       className="py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2"
  //     >
  //       <ReactCountryFlag
  //         svg
  //         style={{
  //           width: "16px",
  //           height: "16px",
  //         }}
  //         countryCode={o.country}
  //       />{" "}
  //       {o.label}
  //     </Listbox.Option>
  //   )
  // })}
  // onChange={handleChange}
  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options.map((opt) => opt.label),
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
      },
      (buttonIndex) => {
        handleChange(options[buttonIndex])
      },
    )

  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        'relative w-full appearance-none border border-gray-200 bg-transparent px-4 py-3 pt-5 focus:outline-none focus:ring-0',
      )}
    >
      <Text className={'absolute left-4 top-1 text-xs text-gray-500'}>
        {'Country'}
      </Text>
      <Text className={'absolute right-4 top-[6px] text-lg text-gray-500'}>
        {'⌄'}
      </Text>
      <Text>{current?.label ?? ''} </Text>
    </Pressable>
  )
}

export default CountrySelect
