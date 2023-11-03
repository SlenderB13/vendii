import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import tw from "twrnc";
import Input from "../../components/text-input";

export default function AddCostumer() {
  return (
    <SafeAreaView style={tw`h-full w-full bg-white`}>
      <ScrollView>
        <View style={tw`p-4 bg-zinc-900 flex items-center justify-center`}>
          <Text style={tw`text-xl text-white`}>Adicione um cliente</Text>
        </View>
        <View style={tw`py-4 px-4`}>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Pessoais</Text>
            <Input label="Nome" icon="account-outline" />
            <Input label="Endereço" icon="map-marker-outline" />
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Contato</Text>
            <Input label="Email" icon="at" />
            <Input label="Telefone" icon="phone-outline" />
          </View>
          <View style={tw`flex flex-col gap-3 mt-4`}>
            <Text style={tw`text-sm text-zinc-400`}>Plano</Text>
            <Input label="Plano" icon="badge-account" />
            <View style={tw`flex flex-nowrap`}>
              <Input label="Valor" icon="cash" />
              <Input label="Vigência" icon="calendar" />
            </View>
          </View>
          <Button
            mode="contained"
            buttonColor="black"
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
