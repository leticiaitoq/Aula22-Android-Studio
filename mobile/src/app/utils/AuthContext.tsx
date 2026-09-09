import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jsVersion } from "react-native-reanimated/lib/typescript/platform-specific/jsVersion";

interface Payload{
    user:User | null,
    isLoggedIn: boolean,
    token: string | null
}

interface User{
    id: number,
    nome?: string,
    email? : string,
    avatar? : string,
}

type ContextProps = {
    user : User | null;
    isLoggedIn : boolean;
    isReading: boolean;
 logIn : (login:string | undefined, password:string) => void;
 logOut: () => void;
};

const authStorage = "auth-key";

export  const AuthContext = createContext<ContextProps>({
    isLoggedIn : false,
    isReading: false,
    logIn : () => {},
    logOut : () => {},
    user : null,
});

export default function AuthProvider({children}:PropsWithChildren){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isReading, setIsReading] = useState(false);
    const [user, setUser] = useState<User|null>(null);
    const router = useRouter();

    useEffect( () => {
        const loadStorage = async  () => {
            const response = await AsyncStorage.getItem(authStorage);
            if ( response ) {
                const jsonValue = JSON.parse(response) ;
               // console.log( jsonValue.isLoggedIn);
                setIsLoggedIn( jsonValue.isLoggedIn );
                setUser(jsonValue.user)
            }
            return
        }
        loadStorage()
    },[]);

    const StoreAuthState = async (newState: Payload) => {
        try {
            const jsonValue = JSON.stringify(newState);
            await AsyncStorage.setItem(authStorage, jsonValue);
        } catch (e) {
            //saving error
            console.log("falha ao salvar localstorage");
        }
    }

        // const storeData = async (value) => {
        //  try{
        //      await AsyncStorage.setItem('my-key', value);
        //  } catch (e){
        //      // saving error
        //  }

    const logIn = async (login:string | undefined, password:string) => {
        setIsLoggedIn(true)
         const newUser:User ={
            id : 1,
            nome: login,
            email: login,
        }
        
        const payload : Payload ={
            user : newUser,
            isLoggedIn: true,
            token : "Aqui vai o token"
        }
        await StoreAuthState(payload);
        setUser(newUser)
        router.push("/")
    }

    const logOut = async () => {
        setIsLoggedIn(false)
        const payload:Payload ={
            isLoggedIn: false,
            user : null,
            token : null
        }
        await StoreAuthState(payload);
        setUser(null)
         router.push("/login")
    }

    return(
        <AuthContext.Provider value = {{user, isReading, isLoggedIn, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
