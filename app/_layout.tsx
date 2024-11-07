import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title : 'Home' , headerStyle: { backgroundColor: '#f4511e' } }}/>
      <Stack.Screen name="TaskScreen" options={{ title : 'TaskScreen' , headerStyle: { backgroundColor: '#f4511e' } }}/>

    </Stack>
  );
}
