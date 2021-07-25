import React from 'react';
import { View } from 'react-native';
import MyStyles from '../styles/MyStyles';
import { ContainerText } from '../components/ContainerText';

export function Alimentos() {
    return (
        <View style={MyStyles.container}>
            <ContainerText 
                titulo="Curso Técnico Integrado em Alimentos"
                corpo="Atua no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, 
                    realizando análises físico-químicas, microbiológicas e sensoriais. Auxilia no planejamento, coordenação e controle de 
                    atividades do setor. Realiza a sanitização das indústrias alimentícias e de bebidas. Controla e corrige desvios nos 
                    processos manuais e automatizados. Acompanha a manutenção de equipamentos. Participa do desenvolvimento de novos produtos 
                    e processos Possibilidades de atuação: Indústrias de alimentos e bebidas. Entrepostos de armazenamento e beneficiamento. 
                    Laboratórios, institutos de pesquisa e consultoria. Órgãos de fiscalização sanitária e proteção ao consumidor. Indústria 
                    de insumos para processos e produtos."
                modalidade="Presencial"
                carga="3.480h"
                duracao="4 anos"
                resolucao="Resolução Nº 18/2006-CONSUP/IFRN, de 26/07/2006."
                link='https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-integrado/alimentos/at_download/coursePlan'
            />
        </View>
    )
}