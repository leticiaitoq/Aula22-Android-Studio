import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CadastroLayout() {
  return (<Drawer>
    <Drawer.Screen
    name="fornecedores"
    options={{
      title:"Fornecedores", drawerIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />
    }} />
    <Drawer.Screen 
    name="vendedores"
    options={{
      title:"Vendedores", drawerIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />
    }}
    />
    <Drawer.Screen
    name="index"
    options={{
      title:"Clientes", drawerIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />
    }}
    />

  </Drawer>
  )
}
