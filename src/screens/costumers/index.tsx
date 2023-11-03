import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/app-header";

export default function Costumers() {
  return (
    <SafeAreaView>
      <AppHeader />
      <View>
        <Text>My costumers</Text>
      </View>
    </SafeAreaView>
  );
}
