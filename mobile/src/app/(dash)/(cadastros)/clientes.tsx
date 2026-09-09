import { View, Text, StyleSheet } from "react-native";

export default function Clientes (){
    return (
        <View style={estilos.container}>
            <Text>Fornecedores</Text>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        container:{
            flex: 3,
            alignItems: "center",
            justifyContent: "center"
        }
    }
)
