import { createStackNavigator } from "@react-navigation/stack";
import Campaigns from "../../screens/campaigns";
import AddCostumer from "../../screens/add-costumer";

export default function StackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Campaigns"
    >
      <Stack.Screen name="Campaigns" component={Campaigns} />
      <Stack.Screen name="Add Costumer" component={AddCostumer} />
    </Stack.Navigator>
  );
}
