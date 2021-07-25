import React from 'react';
import { View, Text, ImageBackground, Image, Linking } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { AntDesign } from '@expo/vector-icons'; 

export function Home() {
    return(
        <View style={MyStyles.containerHome}>
            <ImageBackground
                source={{uri: 'https://portal.ifrn.edu.br/portal_css/tema2011/++resource++ifrn.tema2011.images/bg.jpg' }}
                resizeMode="cover"
                style={MyStyles.imgBG}>
                <Text></Text>
                <View style={MyStyles.txtHome}>
                    <Image source={{uri: 'https://portal.ifrn.edu.br/campus/reitoria/arquivos/2020/logos-por-campi/campus-pau-dos-ferros-1/logo-horizontal'}}
                        style={MyStyles.imgLogo}
                    />
                </View>
                <View style={MyStyles.descricao}>
                    <Text style={MyStyles.txtDesc}>
                        BR 405, KM 154, S/N, Bairro Chico Cajá{'\n'}
                        Pau dos Ferros/RN, CEP 59900-000{'\n'}
                        CNPJ: 10.877.412/0006-72{'\n'}
                        Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira){'\n'}
                        E-mail: comunicacao.pf@ifrn.edu.br{'\n'}
                        Telefone: (84) 4005 4109
                    </Text>
                    <View style={MyStyles.redessociais}>
                        <AntDesign name="facebook-square" size={40} color="#3b5998" onPress={() => Linking.openURL('http://facebook.com/ifrnpaudosferros') } />
                        <AntDesign name="instagram" size={40} color="#fff" onPress={() => Linking.openURL('https://www.instagram.com/ifrnpaudosferros') } />
                        <AntDesign name="twitter" size={40} color="#2aa9e0" onPress={() => Linking.openURL('http://twitter.com/ifrnpdf') } />
                        <AntDesign name="youtube" size={40} color="#c4302b" onPress={() => Linking.openURL('http://www.youtube.com/c/IFRNPDF') } />
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}