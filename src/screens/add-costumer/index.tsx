import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import tw from "twrnc";

export default function AddCostumer() {
  return (
    <SafeAreaView style={tw`h-full w-full`}>
      <View style={tw`py-12 px-4`}>
        <Text style={tw`text-xl`}>Adicione um cliente</Text>
      </View>
    </SafeAreaView>
  );
}
