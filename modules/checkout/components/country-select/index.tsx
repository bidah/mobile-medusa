import { Text } from "design";
import { useStore } from "lib/context/store-context";
import useToggleState from "lib/hooks/use-toggle-state";
import { useRegions } from "medusa-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { ActionSheetIOS } from "react-native";

type CountryOption = {
  country: string;
  region: string;
  label: string;
};

const CountrySelect = () => {
  const { countryCode, setRegion } = useStore();
  const { regions } = useRegions();
  const [current, setCurrent] = useState<CountryOption | undefined>(undefined);
  const { state, open, close } = useToggleState();

  const options: CountryOption[] | undefined = useMemo(() => {
    return regions
      ?.map((r) => {
        return r.countries.map((c) => ({
          country: c.iso_2,
          region: r.id,
          label: c.display_name,
        }));
      })
      .flat();
  }, [regions]);

  useEffect(() => {
    if (countryCode) {
      const option = options?.find((o) => o.country === countryCode);
      setCurrent(option);
    }
  }, [countryCode, options]);

  const handleChange = (option: CountryOption) => {
    setRegion(option.region, option.country);
    close();
  };

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
        userInterfaceStyle: "light",
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          // setFixedAspectRatiofromAtom({ aspectRatio: 1, name: '2" x 2"' });
        } else if (buttonIndex === 2) {
          // setFixedAspectRatiofromAtom({ aspectRatio: 3 / 4, name: '3" x 4"' });
        } else if (buttonIndex === 3) {
          // setFixedAspectRatiofromAtom({ aspectRatio: 1, name: '4" x 4"' });
        } else if (buttonIndex === 4) {
          // setFixedAspectRatiofromAtom({ aspectRatio: 4 / 6, name: '4" x 6"' });
        } else if (buttonIndex === 5) {
          // setFixedAspectRatiofromAtom({ aspectRatio: 5 / 6, name: '5" x 6"' });
        }
      }
    );

  return <Text>choose country</Text>;
};

export default CountrySelect;
