import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, Image } from "react-native";
import { Button, Text, TextInput, Surface, Modal, Portal, } from "react-native-paper";
import { Animated } from "react-native-web";
import { auth } from "../config/firebase";
import { styles } from "../config/styles";


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
  });
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function realizaLogin() {
    console.log("Fazer Login");
    if(email === ""){
      setErro({
        ...erro,
        email: true,
      });
      setErrorMessage("Eamil é obrigatório");
      showModal();
      return;
    } else {
      setErro({
        ...erro,
        email: false,
      })
    }

    if(senha === ""){
      setErro({
        ...erro,
        senha: true,
      });
      setErrorMessage("Email é obrigatório.");
      showModal();
    } else {
      setErro({
        ...erro,
        senha: false,
      })
    }
    realizaLoginNoFirebase();
  }

  function realizaLoginNoFirebase(){
    try{
      const usuarioRef = signInWithEmailAndPassword(auth, email, senha);
      console.log(usuarioRef);
      navigation.navigate("HomeScreen");
    } catch (erro) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Usuario não encontrado");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Senha incorreta");
      } else {
        setErrorMessage("Erro ao fazer login: "+error.message);
      }
      showModal();
    }
  }

  return (
    <Surface style={styles.container}>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Animated.View animation="pulse">
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Faça seu Login
        </Text>
        <TextInput
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          error={erro.email}
        />
        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry // faz com que o campo seja senha com *
          style={styles.input}
          error={erro.senha}
        />
        <View>
          <Button onPress={realizaLogin} mode="contained">
            Fazer Login
          </Button>
        </View>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Faça seu cadastro
        </Button>
        </Animated.View>
      </View>
    </View>
    </Surface>
  );
}
