import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigation from "./src/components/bottom-navigation";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
