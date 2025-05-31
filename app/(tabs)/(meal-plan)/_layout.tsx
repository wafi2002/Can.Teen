import { Stack } from "expo-router";

export default function MealPlanLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
