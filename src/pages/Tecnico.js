import React from 'react';
import { View, ImageBackground } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { MyBtn } from '../components/MyBtn';

export function Tecnico( {navigation} ) {
    return (
        <View style={MyStyles.containerCurso}>
            <ImageBackground
                source={require('../imagens/imgifrn.png')}
                resizeMode="cover"
                style={MyStyles.imgCursos}>
                <MyBtn titulo="Tec Alimentos" onPress={() => navigation.navigate('Tec Alimentos')} />
                <MyBtn titulo="Tec Apicultura" onPress={() => navigation.navigate('Tec Apicultura')} />
                <MyBtn titulo="Tec Informática" onPress={() => navigation.navigate('Tec Informatica')} />
            </ImageBackground>
        </View>
    )
}