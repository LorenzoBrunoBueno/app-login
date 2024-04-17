import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({navigation}){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [repetirSenha, setRepetirSenha] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [CEP, setCEP] = useState();
    const [logradouro, setLogradouro] = useState();
    return(
        <View style={styles.container}>
            <View style={styles.container}>
            <Text>Faça seu Registro</Text>
            <Text>Email:</Text>
            <TextInput
              placeholder="Digite seu e-mail"
              onChangeText={setEmail}
              value={email}
            
            />
            <Text>Senha:</Text>
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={setSenha}
              value={senha} secureTextEntry
            />
            <Text>Confirma Senha:</Text>
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={setRepetirSenha}
              value={repetirSenha} secureTextEntry
            />
            <Text>Cidade:</Text>
            <TextInput
              placeholder="Digite sua cidade"
              onChangeText={setCidade}
              value={cidade} 
            />
            <Text>Estado:</Text>
            <TextInput
              placeholder="Digite seu Estado"
              onChangeText={setEstado}
              value={estado} 
            />
            <Text>CEP:</Text>
            <TextInput
              placeholder="Digite seu CEP"
              onChangeText={setCEP}
              value={CEP} 
            />
            <Text>Logradouro</Text>
            <TextInput
              placeholder="Digite seu Logradouro"
              onChangeText={setLogradouro}
              value={logradouro} 
            />
             <Button>
                Registrar
            </Button>
            </View>
        </View>
    )
}