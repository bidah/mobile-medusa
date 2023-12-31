import { Stack } from "expo-router";
import { Provider } from "provider";

export default function Layout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="order/details/[id]" />
        <Stack.Screen
          name="order/confirmed/[id]"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
}
