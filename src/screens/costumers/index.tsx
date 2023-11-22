import { FlatList, SafeAreaView, View } from "react-native";
import AppHeader from "../../components/app-header";
import Header from "../../components/header";
import { storage } from "../../lib/react-native-mmkv";
import { Costumer } from "../../types/costumer.interface";
import { CostumerItem } from "../../components/costumer-item";
import tw from "twrnc";
import { FAB, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Costumers() {
  const costumersJson: string | undefined = storage.getString("costumers");
  let costumers: Costumer[] = [];
  const navigation = useNavigation();

  if (costumersJson) {
    costumers = JSON.parse(costumersJson);
  }

  return (
    <SafeAreaView>
      <AppHeader />
      <View>
        <Header title="Meus clientes" />
        <FlatList
          style={tw`p-4 min-h-full`}
          data={costumers}
          renderItem={(costumers) => <CostumerItem costumer={costumers.item} />}
        />
      </View>
      <FAB
        style={tw`absolute right-4 bottom-36 bg-zinc-900`}
        icon="plus"
        label="Adicionar cliente"
        color="white"
        onPress={() => {
          navigation.navigate("Add Costumer");
        }}
      />
    </SafeAreaView>
  );
}
