import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import Header from "../../components/header";

export default function Costumers() {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>My costumers</Text>
      </View>
    </SafeAreaView>
  );
}
