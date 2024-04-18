import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [CEP, setCEP] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [erro, setErro] = useState("");

    function realizaRegistro(){
      if(cidade || email || senha || repetirSenha || CEP != "" && senha == repetirSenha){
        alert("Dados Enviados")
      }else{
        alert("Preencha todos os campos corretamente")
      }
    }

    function buscaCEP(){
      let cepLimpo = CEP.replace("-", "").trim();
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf)
      })
    }

    return(
        <View style={styles.container}>
            <View style={styles.container}>
            <Text>Faça seu Registro</Text>
            <Text>Email:</Text>
            <TextInput
              placeholder="Digite seu e-mail"
              onChangeText={setEmail}
              value={email}
              style={styles.input}
            />
            <Text>Senha:</Text>
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={setSenha}
              value={senha} secureTextEntry
              style={styles.input}
            />
            <Text>Confirma Senha:</Text>
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={setRepetirSenha}
              value={repetirSenha} secureTextEntry
              style={styles.input}
            />
            <View
            style={{
              flexDirection: "row",
              justifyContent: "sapce-between",
            }}>
            <Text>Cidade:</Text>
            <TextInput
              placeholder="Digite sua cidade"
              onChangeText={setCidade}
              value={cidade} 
              style={{
                ...styles.input,
                width: "70%"
              }}
            />
            <Text>Estado:</Text>
            <TextInput
              placeholder="Digite seu Estado"
              onChangeText={setEstado}
              value={estado} 
              style={{
                ...styles.input,
                widht: "30%"
              }}
            />
            <Text>CEP:</Text>
            <TextInput
              placeholder="Digite seu CEP"
              onChangeText={setCEP}
              value={CEP} 
              onBlur={buscaCEP}
              style={styles.input}
            />
            </View>
            <Text>Logradouro</Text>
            <TextInput
              placeholder="Digite seu Logradouro"
              onChangeText={setLogradouro}
              value={logradouro} 
              style={styles.input}
            />
             <Button onPress={realizaRegistro}>
                Registrar

            </Button>
            </View>
        </View>
    )
}