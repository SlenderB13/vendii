import { ChangeEvent, ComponentProps, ReactComponentElement } from "react";
import { TextInput } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import tw from "twrnc";

interface inputProps extends ComponentProps<typeof TextInput> {
  label: string;
  icon?: IconSource;
}

export default function Input({ label, icon, onChangeText }: inputProps) {
  return (
    <TextInput
      label={label}
      mode="flat"
      selectionColor="black"
      outlineColor="black"
      activeOutlineColor="black"
      style={tw`bg-white`}
      onChangeText={onChangeText}
      outlineStyle={{
        borderRadius: 10,
      }}
      left={icon && <TextInput.Icon icon={icon} />}
    />
  );
}
