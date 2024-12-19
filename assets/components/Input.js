import { stylesFormulario } from "../styles/stylesFormulario";
import { View, Text, TextInput } from "react-native";

export default function Input({label, placeholder, keyboard, value, setValue, line, numberOfLines, maxLength}) {

    return(
        <View style={stylesFormulario.campo}>
            <Text style={stylesFormulario.label}>{label}</Text>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={'#c7c7c7'}
              style={stylesFormulario.input}
              keyboardType={keyboard}
              value={value}
              onChangeText={setValue}
              multiline={line}
              numberOfLines={numberOfLines}
              maxLength={maxLength}
            />
          </View>
    )
}