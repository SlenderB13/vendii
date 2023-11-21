import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import tw from "twrnc";
import Input from "../../components/text-input";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { storage } from "../../lib/react-native-mmkv";

interface Costumer {
  name: string;
  address: string;
  email: string;
  phone: string;
  plan: {
    name?: string;
    value?: string;
    startDate?: string;
  };
}

export default function AddCostumer() {
  const [costumer, setCostumer] = useState<Partial<Costumer>>({});

  function handleSaveCostumer(): void {
    console.log(costumer);
    //storage.set("costumer", JSON.stringify(costumer));
    //console.log(storage.getString("costumer.name"));
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
              onChangeText={(text) =>
                setCostumer((costumer) => ({
                  ...costumer,
                  plan: { name: text },
                }))
              }
            />
            <View style={tw`flex flex-nowrap`}>
              <Input
                label="Valor"
                icon="cash"
                onChangeText={(text) =>
                  setCostumer((costumer) => ({
                    ...costumer,
                    plan: { value: text },
                  }))
                }
              />
              <Input
                label="Vigência"
                icon="calendar"
                onChangeText={(text) =>
                  setCostumer((costumer) => ({
                    ...costumer,
                    plan: { startDate: text },
                  }))
                }
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
