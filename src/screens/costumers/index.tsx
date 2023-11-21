import { FlatList, SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/app-header";
import Header from "../../components/header";
import { storage } from "../../lib/react-native-mmkv";
import { Costumer } from "../../types/costumer.interface";

export default function Costumers() {
  const costumersJson: string | undefined = storage.getString("costumers");
  let costumers: Costumer[] = [];

  if (costumersJson) {
    costumers = JSON.parse(costumersJson);
  }

  return (
    <SafeAreaView>
      <AppHeader />
      <View>
        <Header title="Meus clientes" />
        <FlatList
          data={costumers}
          renderItem={(item) => <Text>{item.item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
