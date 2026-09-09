import { Text, View, StyleSheet, TextInput,Image, Button, TouchableOpacity, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


import styles from "./logincss"
import { useContext, useState } from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import LogoApp from "@/components/LogoApp";
import ButtonFatec from "@/components/Button";
import { AuthContext } from "./utils/AuthContext";


export default function Index() {

  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();
  const auth = useContext(AuthContext)

  function onPressButton(){
    if (login =="teste" && password == "123"){
      // Alert.alert("Acesso concedido com sucesso");
      //router.navigate('/(dash)');
      
      auth.logIn(login, password)
    } else {
      Alert.alert("Senha inválida")
    }
  }
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require("@/assets/images/favicon.png")}/> */}
      <LogoApp />
      <Text style={styles.titulo} >Login</Text>
       <Text style={styles.subtitulo}> Bem vindo, estamos felizes pelo seu retorono, faça o login...</Text>

      <Text style={styles.inputText} >Login</Text>
      <TextInput style={styles.input}
      onChangeText={(value)=>{setLogin(value)}}
      placeholder="informe o login"
      autoFocus
      ></TextInput>
      {/* <TextInput style={{width: "90%", backgroundColor:"gray" }}></TextInput> */}

      <Text style={styles.inputText}> Password:</Text>
      <TextInput style={styles.input} 
      placeholder="informe a senha de acesso"
      secureTextEntry
      maxLength={12}
      onChangeText={(value)=>{setPassword(value)}}
      ></TextInput>
      {/* <TextInput style={{width: "90%", backgroundColor:"gray" }}></TextInput> */}

      <Text style={styles.subtitulo}> Caso não possua registro</Text>
       <Link style={{color:"red"}} href={"/register"}>  registre-se aqui </Link>

      <ButtonFatec
       onFunctionButton={onPressButton}
       titleButton="Acessar"
       icon={<Ionicons name="checkmark-circle" size={32} color="#8cf58c" />}
       styleButton={{backgroundColor:"#ff00b3"}}
       styleTitle={{fontSize:26}}
       />

      {/* <TouchableOpacity 
      style={ styles.button}
      onPress={()=> {onPressButton()}}>
        <Ionicons name="checkmark-circle" size={32} color="#fff" />
        <Text style={ styles.buttonText}>
          Acessar
          </Text>
      </TouchableOpacity> */}
    </View>
  );
}


