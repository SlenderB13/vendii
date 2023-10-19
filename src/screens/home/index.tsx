import { SafeAreaView } from "react-native";
import tw from "twrnc";
import StackNavigation from "../../components/stack-navigation";
import Header from "../../components/header";

export default function Home() {
  return (
    <SafeAreaView style={tw`h-full w-full`}>
      <Header />
      <StackNavigation />
    </SafeAreaView>
  );
}
