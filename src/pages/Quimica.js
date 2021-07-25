import React from 'react';
import { View, ImageBackground } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { ContainerText } from '../components/ContainerText';

export function Quimica() {
    return (
        <View style={MyStyles.containerCurso}>
            <ImageBackground
                source={require('../imagens/imgifrn.png')}
                resizeMode="cover"
                style={MyStyles.imgCursos}>
                <ContainerText 
                    titulo="Licenciatura em Química"
                    corpo="O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério 
                    na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos 
                    métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração 
                    de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, 
                    em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico, de insumos agrícolas, 
                    insumos industriais, matérias-primas; o controle de qualidade de matérias-primas e produtos para que os produtos finais atinjam 
                    as especificações impostas pelo mercado ou pelos órgãos oficiais de controle sanitário; o tratamento de efluentes industriais, 
                    visando a proteção do meio ambiente e o reaproveitamento de subprodutos."
                    modalidade="Presencial"
                    carga="3.404h"
                    duracao="4 anos"
                    resolucao="Resolução Nº 08/2012-CONSUP/IFRN, de 01/03/2012"
                    link='https://portal.ifrn.edu.br/ensino/cursos/cursos-de-graduacao/licenciatura/licenciatura-plena-em-quimica/at_download/coursePlan'
                />
            </ImageBackground>
        </View>
    )
}