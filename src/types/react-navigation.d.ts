import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Costumer } from "./costumer.interface";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

export function useNavigation<T extends NavigationProp>(): T;

export type StackNavigationParamList = {
  CostumerDetails: Costumer;
};
