import { Text, View, StyleSheet, TextInput,Image, Button, TouchableOpacity, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


import styles from "./logincss"
import { useState } from "react";
import { useRouter } from "expo-router";
import LogoApp from "@/components/LogoApp";
import { Link } from "expo-router";
import ButtonFatec from "@/components/Button";


export default function Register() {

  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullname, setFullName] = useState<string>();
  function onPressButton(){
    console.log(login)
    console.log(password)
    if (login =="teste" && password == "123"){
      Alert.alert("Acesso concedido com sucesso")
    } else {
      Alert.alert("Senha inválida")
    }
  }
  return (
    <View style={styles.container}>
      <LogoApp />
      <Text style={styles.titulo} >Registro</Text>
       <Text style={styles.subtitulo}>Estamos felizes com o seu cadastro</Text>

      <Text style={styles.inputText} >Nome Completo</Text>
      <TextInput style={styles.input}
      onChangeText={(value)=>{setFullName(value)}}
      placeholder="informe o nome completo sem abreviação..."
      autoFocus
      ></TextInput>

      <Text style={styles.inputText} >Login</Text>
      <TextInput style={styles.input}
      onChangeText={(value)=>{setLogin(value)}}
      placeholder="informe o login"
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

        <Text style={styles.subtitulo}>Já possui registro?</Text>
       <Link style={{color:"red"}} href={"/"}>  Volte apra o login </Link>
       <ButtonFatec
       onFunctionButton={onPressButton}
       titleButton="Registrar"
       styleButton={{backgroundColor:"gray"}}
       styleTitle={{fontSize:26}}
       />


      {/* <Button color={"hotpink"} onPress={()=> {console.log('Acessando o sistema')}} title="Acessar"/>
      <TouchableOpacity 
      style={ styles.button}
      onPress={()=> {onPressButton()}}>
        <Ionicons name="checkmark-circle" size={32} color="#fff" />
        <Text style={ styles.buttonText}>
          Registrar
          </Text>
      </TouchableOpacity> */}
    </View>
  );
}


