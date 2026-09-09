import { Text, View, StyleSheet } from "react-native";
import ButtonFatec from "@/components/Button"
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

export default function Index() {
  const auth = useContext(AuthContext);
  const router = useRouter();
  function onClickClose(){
    auth.logOut()
  }
  return (
    <View style={estilos.container}>
      <Text>Dashboard</Text>
      <Text> usuario : {auth.user?.nome}</Text>
      <ButtonFatec 
      onFunctionButton= {onClickClose}
      titleButton=  "Sair"
      icon={<Ionicons name="checkmark-circle" size={32} color="#fff" />}
       styleButton={{backgroundColor:"#ff00b3"}}
       styleTitle={{fontSize:26}}
      />
      
    </View>
  );
}

const estilos = StyleSheet.create(
{
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}
);