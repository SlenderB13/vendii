import { Appbar } from "react-native-paper";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

export default function AppHeader() {
  let [fontsLoaded, fontError] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Content
        title="vendii"
        titleStyle={{
          fontFamily: "BebasNeue_400Regular",
        }}
      />
    </Appbar.Header>
  );
}
