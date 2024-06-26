import { useState } from 'react';
import { TextInput } from "react-native-paper";
import {Icon} from "react-native-paper";
import { styles } from '../config/styles';


export default function InsertNote(){
    const [text, setText] = useState("")
    function handleSubmit(){
        console.log(text)
        if(text.lenght < 1){
            Alert.alert("Aviso", "Insira uma nota");
            return;
        }
        if (text !== ""){
            setText("")
        }
    }
    return(
        <>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholer="Inserir nota"
                right={<TextInput.Icon
                    onPress={handleSubmit}
                    icon="send" />}
                style={styles.input}


            />
                
        </>
    )
}