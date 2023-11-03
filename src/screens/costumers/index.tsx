import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/app-header";
import Header from "../../components/header";

export default function Costumers() {
  return (
    <SafeAreaView>
      <AppHeader />
      <View>
        <Header title="Meus clientes" />
      </View>
    </SafeAreaView>
  );
}
