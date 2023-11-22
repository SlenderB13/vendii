import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";
import Input from "../../components/text-input";
import tw from "twrnc";
import Header from "../../components/header";
import { Costumer } from "../../types/costumer.interface";
import { useRoute } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

interface RouteParamsProps {
  costumer: Costumer;
}

export default function CostumerDetails() {
  const route = useRoute();

  const routeParams = route.params as RouteParamsProps;
  const costumer = routeParams.costumer as Costumer;

  return (
    <SafeAreaView style={tw`h-full w-full bg-white`}>
      <ScrollView>
        <Header title="Detalhes" />
        <View style={tw`py-4 px-4`}>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Pessoais</Text>
            <View>
              <View style={tw`flex flex-row items-center`}>
                <IconButton icon="account-outline" />
                <Text>{costumer.name}</Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <IconButton icon="map-marker-outline" />
                <Text>{costumer.address}</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Contato</Text>
            <View style={tw`flex flex-row items-center`}>
              <IconButton icon="at" />
              <Text>{costumer.email}</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <IconButton icon="phone-outline" />
              <Text>{costumer.phone}</Text>
            </View>
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Plano</Text>
            <View style={tw`flex flex-row items-center`}>
              <IconButton icon="badge-account" />
              <Text>{costumer.plan.name}</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <IconButton icon="cash" />
              <Text>{costumer.plan.value}</Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <IconButton icon="calendar" />
              <Text>{costumer.plan.startDate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
