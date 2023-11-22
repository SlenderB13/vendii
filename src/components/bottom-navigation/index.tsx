import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Costumers from "../../screens/costumers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home";
import { Fragment } from "react";
import { Portal, FAB } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <Fragment>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 58,
            padding: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Início",
            tabBarLabelStyle: {
              marginBottom: 8,
            },
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Ionicons name="home" size={22} />;
              }
              return (
                <Ionicons name="home-outline" size={22} color={"#a9a9a9"} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Costumers"
          component={Costumers}
          options={{
            title: "Clientes",
            headerShown: false,
            tabBarLabelStyle: {
              marginBottom: 8,
            },
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <MaterialCommunityIcons name="account-group" size={28} />
                );
              }
              return (
                <MaterialCommunityIcons
                  name="account-group-outline"
                  size={28}
                  color={"#a9a9a9"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
}
