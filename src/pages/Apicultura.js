import React from 'react';
import { View } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { ContainerText } from '../components/ContainerText';

export function Apicultura() {
    return (
        <View style={MyStyles.container}>
            <ContainerText 
                titulo="Curso Técnico Integrado em Apicultura"
                corpo="Executa o planejamento, a implantação, a manutenção e a gestão de apiários. Atua no beneficiamento 
                    e processamento de mel, própolis, geléia real e demais produtos da atividade apícola. Acompanha pesquisas 
                    sobre produção intensiva e artesanal, terapias com mel, controle de qualidade e aprimoramento de espécies. 
                    Comercializa produtos apícolas, organiza feiras e exposições da atividade apicultora, incentivando a 
                    realização de negócios no setor ou mesmo a criação artesanal de abelhas. Possibilidades de atuação Apiários 
                    e demais estabelecimentos de beneficiamento e processamento e comercialização de produtos da apicultura."
                modalidade="Presencial"
                carga="4.010h"
                duracao="4 anos"
                resolucao="Resolução Nº 24/2011-CONSUP/IFRN, de 09/10/2011"
                link='https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-integrado/tecnico-em-apicultura/at_download/coursePlan'
            />
        </View>
    )
}