import { SafeAreaView, View } from "react-native";
import { FAB, Portal, Text } from "react-native-paper";
import Header from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function Campaigns() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Header title="Início" />
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
