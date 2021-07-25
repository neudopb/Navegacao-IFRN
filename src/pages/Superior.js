import React from 'react';
import { View, ImageBackground } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { MyBtn } from '../components/MyBtn';

export function Superior( {navigation} ) {
    return (
        <View style={MyStyles.containerCurso}>
            <ImageBackground
                source={require('../imagens/imgifrn.png')}
                resizeMode="cover"
                style={MyStyles.imgCursos}>
                <View style={MyStyles.viewBtn}>
                    <MyBtn titulo="Análise de Sistemas" onPress={() => navigation.navigate('Analise de Sistemas')} />
                    <MyBtn titulo="Química" onPress={() => navigation.navigate('Quimica')} />
                </View>
            </ImageBackground>
        </View>
    )
}