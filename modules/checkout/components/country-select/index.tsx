import { Text } from "design";
import { useStore } from "lib/context/store-context";
// import useToggleState from "lib/hooks/use-toggle-state";
// import { useRegions } from "medusa-react";
// import { Fragment, useEffect, useMemo, useState } from "react";
// import { ActionSheetIOS } from "react-native";

type CountryOption = {
  country: string;
  region: string;
  label: string;
};

const CountrySelect = () => {
  const { countryCode, setRegion } = useStore();

  return <Text>choose country: {countryCode}</Text>;
};

export default CountrySelect;
