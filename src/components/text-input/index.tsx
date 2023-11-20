import { TextInput } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import tw from "twrnc";

interface inputProps {
  label: string;
  icon?: IconSource;
}

export default function Input({ label, icon }: inputProps) {
  return (
    <TextInput
      label={label}
      mode="flat"
      selectionColor="black"
      outlineColor="black"
      activeOutlineColor="black"
      style={tw`bg-white`}
      outlineStyle={{
        borderRadius: 10,
      }}
      left={icon && <TextInput.Icon icon={icon} />}
    />
  );
}
