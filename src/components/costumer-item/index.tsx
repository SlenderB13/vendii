import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Card, List } from "react-native-paper";
import { Costumer } from "../../types/costumer.interface";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationParamList } from "../../types/react-navigation";

interface CostumerItemProps {
  costumer: Costumer;
  navigation?: StackNavigationProp<StackNavigationParamList>;
}

export function CostumerItem({ costumer }: CostumerItemProps) {
  const navigation = useNavigation();
  return (
    <List.Item
      title={costumer.name}
      left={() => <List.Icon icon="account-outline" />}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "CostumerDetails",
          params: { costumer: costumer },
        })
      }
    />
  );
}
