import { View } from "react-native";
import { Text } from "react-native-paper";
import tw from "twrnc";

interface headerProps {
  title: string;
}

export default function Header({ title }: headerProps) {
  return (
    <View style={tw`p-4 bg-zinc-900 flex items-center justify-center`}>
      <Text style={tw`text-xl text-white`}>{title}</Text>
    </View>
  );
}
