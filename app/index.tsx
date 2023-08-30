import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  return (
    <Animated.Text
      entering={FadeInDown.duration(1000).springify()}
      className="bg-black text-white p-3 px-6 rounded-full m-auto text-xl"
    >
      Welcome to Expo 👋
    </Animated.Text>
  );
}
