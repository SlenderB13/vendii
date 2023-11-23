import { SafeAreaView, View } from "react-native";
import { Card, FAB, Portal, Text } from "react-native-paper";
import Header from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { storage } from "../../lib/react-native-mmkv";
import { Costumer } from "../../types/costumer.interface";

export default function Campaigns() {
  const navigation = useNavigation();

  const costumersJson: string | undefined = storage.getString("costumers");
  let costumers: Costumer[] = [];
  let costumersAmount: number = 0;

  if (costumersJson) {
    costumers = JSON.parse(costumersJson);
    costumersAmount = costumers.length;
  }

  return (
    <SafeAreaView>
      <View>
        <Header title="Início" />
      </View>
      <View style={tw`p-4`}>
        <Card>
          <Card.Cover
            source={require("../../../assets/undraw-investment.png")}
          />
          <Card.Title title="Total de clientes:" />
          <Card.Content>
            <Text style={tw`font-bold text-lg`}>{costumersAmount}</Text>
          </Card.Content>
        </Card>
      </View>
      <FAB
        style={tw`absolute right-4 top-123 bg-zinc-900`}
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
