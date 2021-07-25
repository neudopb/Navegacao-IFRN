import React from 'react';
import { View, ImageBackground } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { ContainerText } from '../components/ContainerText';

export function Ads() {
    return (
        <View style={MyStyles.containerCurso}>
            <ImageBackground
                source={require('../imagens/imgifrn.png')}
                resizeMode="cover"
                style={MyStyles.imgCursos}>
                <ContainerText 
                    titulo="Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)"
                    corpo="O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, 
                        documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional 
                        trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na 
                        produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção 
                        de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas 
                        computacionais são fundamentais à atuação deste profissional."
                    modalidade="Presencial"
                    carga="2.594h"
                    duracao="3 anos"
                    resolucao="Resolução Nº 17/2012-CONSUP/IFRN, de 01/03/2012"
                    link='https://portal.ifrn.edu.br/campus/paudosferros/ensino-cursos/arquivos/projeto-pedagogico-do-curso-de-tads-ppc'
                />
            </ImageBackground>
        </View>
    )
}