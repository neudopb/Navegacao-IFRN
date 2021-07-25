import React from 'react';
import { View, Text, Linking } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { AntDesign  } from '@expo/vector-icons'; 

export function ContainerText(props) {

    return (
        <View style={MyStyles.viewTxt}>
            <Text style={MyStyles.titulo}>{props.titulo}</Text>
            <Text style={MyStyles.txtCursos}>{props.corpo}</Text>
            <Text>
                <Text style={MyStyles.bold}>{"\n"}- Modalidade:</Text> {props.modalidade}{"\n"}
                <Text style={MyStyles.bold}>- Carga horária do curso:</Text> {props.carga}{"\n"}
                <Text style={MyStyles.bold}>- Duracão do curso:</Text> {props.duracao}{"\n"}
                <Text style={MyStyles.bold}>- Resolucão de criacão do curso:</Text> {props.resolucao}{"\n\n"}
            </Text>
            <Text style={MyStyles.txtLink} 
                onPress={() => Linking.openURL(props.link)}>
                PLANO DE CURSO {}<AntDesign name="download" size={20} color="blue" /> 
            </Text>
        </View>
    )
    
}