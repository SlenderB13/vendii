import { SafeAreaView } from "react-native";
import tw from "twrnc";
import AddCostumer from "../add-costumer";
import { createStackNavigator } from "@react-navigation/stack";
import Campaigns from "../campaigns";

export default function Home() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={tw`h-full w-full`}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Campaigns"
      >
        <Stack.Screen name="Campaigns" component={Campaigns} />
        <Stack.Screen name="Add Costumer" component={AddCostumer} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
