import { SafeAreaView } from "react-native";
import tw from "twrnc";
import StackNavigation from "../../components/stack-navigation";

export default function Home() {
  return (
    <SafeAreaView style={tw`h-full w-full`}>
      <StackNavigation />
    </SafeAreaView>
  );
}
