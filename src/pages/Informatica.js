import React from 'react';
import { View, ImageBackground } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { ContainerText } from '../components/ContainerText';

export function Informatica() {
    return (
        <View style={MyStyles.containerCurso}>
            <ImageBackground
                source={require('../imagens/imgifrn.png')}
                resizeMode="cover"
                style={MyStyles.imgCursos}>
                <ContainerText 
                    titulo="Curso Técnico Integrado em Informática"
                    corpo="Desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e 
                    das linguagens de programação. Utiliza ambientes de desenvolvimentos de sistemas, sistemas operacionais e banco 
                    de dados. Realiza testes de software, mantendo registro que possibilitem análises e refinamento dos resultados. 
                    Executa manutenção de programas de computadores implantados. Possibilidades de atuação: Instituições públicas, 
                    privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores."
                    modalidade="Presencial"
                    carga="3880h"
                    duracao="4 anos"
                    resolucao="Resolução Nº 13/2009-CONSUP/IFRN, de 22/05/2009"
                    link='https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-integrado/tecnico-em-informatica/at_download/coursePlan'
                />
            </ImageBackground>
        </View>
    )
}