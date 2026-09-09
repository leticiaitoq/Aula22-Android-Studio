import { Redirect, Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";


const isLoggedIn = false;

export default function DashLayout() {

    const auth = useContext(AuthContext);
    
    // console.log ( '_layout-dash ${auth.isLoggedIn}')
    // if(!auth.IsReading) {
    //     return null;
    // }

    if (!auth.isLoggedIn){
        <Redirect href={"/login"} />
    }
  return (
    <Tabs>
        <Tabs.Screen
        name = "index"
        options={
            {
                title: 'Index',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="checkmark-circle" color={color} />
            }
        }
        />
        <Tabs.Screen
        name="clientes"
        options={
            {
                title: 'Clientes',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="airplane" color={color} />
            }
        }
        />
    </Tabs>
  )
  ;
}
