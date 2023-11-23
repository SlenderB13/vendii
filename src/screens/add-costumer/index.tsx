import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import tw from "twrnc";
import Input from "../../components/text-input";
import Header from "../../components/header";
import { useState } from "react";
import { storage } from "../../lib/react-native-mmkv";
import { Costumer } from "../../types/costumer.interface";
import { useNavigation } from "@react-navigation/native";

export default function AddCostumer() {
  const [costumer, setCostumer] = useState<Partial<Costumer>>({});
  const navigation = useNavigation();

  function handleSaveCostumer(): void {
    storage.set("costumer", JSON.stringify(costumer));

    let existingCustomers = JSON.parse(storage.getString("costumers") || "[]");

    existingCustomers.push(costumer);

    storage.set("costumers", JSON.stringify(existingCustomers));

    navigation.navigate("Campaigns");
  }

  return (
    <SafeAreaView style={tw`h-full w-full bg-white`}>
      <ScrollView>
        <Header title="Adicione um cliente" />
        <View style={tw`py-4 px-4`}>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Pessoais</Text>
            <Input
              label="Nome"
              icon="account-outline"
              onChangeText={(text) =>
                setCostumer((costumer) => ({ ...costumer, name: text }))
              }
            />
            <Input
              label="Endereço"
              icon="map-marker-outline"
              onChangeText={(text) =>
                setCostumer((costumer) => ({ ...costumer, address: text }))
              }
            />
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Contato</Text>
            <Input
              label="Email"
              icon="at"
              onChangeText={(text) =>
                setCostumer((costumer) => ({ ...costumer, email: text }))
              }
            />
            <Input
              label="Telefone"
              icon="phone-outline"
              onChangeText={(text) =>
                setCostumer((costumer) => ({ ...costumer, phone: text }))
              }
            />
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Plano</Text>
            <Input
              label="Plano"
              icon="badge-account"
              onChangeText={(text) => {
                const updatedPlan = Object.assign({}, costumer.plan);
                updatedPlan.name = text;

                setCostumer((costumer) => ({
                  ...costumer,
                  plan: updatedPlan,
                }));
              }}
            />
            <View style={tw`flex flex-nowrap`}>
              <Input
                label="Valor"
                icon="cash"
                onChangeText={(text) => {
                  const updatedPlan = Object.assign({}, costumer.plan);
                  updatedPlan.value = text;

                  setCostumer((costumer) => ({
                    ...costumer,
                    plan: updatedPlan,
                  }));
                }}
              />
              <Input
                label="Vigência"
                icon="calendar"
                onChangeText={(text) => {
                  const updatedPlan = Object.assign({}, costumer.plan);
                  updatedPlan.startDate = text;

                  setCostumer((costumer) => ({
                    ...costumer,
                    plan: updatedPlan,
                  }));
                }}
              />
            </View>
          </View>
          <Button
            mode="contained"
            buttonColor="black"
            onPress={handleSaveCostumer}
            style={{
              paddingVertical: 4,
              marginTop: 16,
            }}
          >
            Salvar
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
