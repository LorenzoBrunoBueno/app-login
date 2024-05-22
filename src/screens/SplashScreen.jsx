import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { ActivityIndicator, Surface } from 'react-native-paper'
import { auth } from '../config/firebase'
import { styles } from '../config/styles'



export default function SpashScreen(){
    useEffect(() => {
       onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário Conectado", user)
                navigation.navigate("HomeScreen")
            } else {
                navigation.navigate("LoginScreen")
                console.log("Usuário não Logado")
            }
        })
    }, []);

    return(
        <Surface style={styles.container}>
            <ActivityIndicator size={"large"}/>
        </Surface>
    );
}
