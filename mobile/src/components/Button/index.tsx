import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, StyleProp } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from "react";

interface ButtonFatecProps {
  onFunctionButton:()=>void;
  titleButton: string,
  icon?: ReactNode;
  styleButton : StyleProp<ViewStyle>;
  styleTitle : StyleProp<TextStyle>;
}

export default function ButtonFatec( {onFunctionButton, titleButton, icon, styleButton, styleTitle
} : ButtonFatecProps
){
    return(
      <TouchableOpacity 
      style = {[estilos.button, styleButton]}
      onPress={()=> { onFunctionButton ? 
        onFunctionButton() : console.log("") }}
      >
        {icon}
        {/* <Ionicons name="checkmark-circle" size={32} color="#fff" /> */}
        <Text
        style={estilos.buttonText}
        > {titleButton} </Text>
      </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: "80%",
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 30,
    flexDirection: "row"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 15,
  }
});