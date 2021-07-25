import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Home } from './pages/Home';
import { Tecnico } from './pages/Tecnico';
import { Superior } from './pages/Superior';

import { Alimentos } from './pages/Alimentos';
import { Apicultura } from './pages/Apicultura';
import { Informatica } from './pages/Informatica';

import { Ads } from './pages/Ads';
import { Quimica } from './pages/Quimica';

const TabNav = createBottomTabNavigator();
const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

function tecnicoStackScreen() {
    return (
        <TecnicoStack.Navigator>
            <TecnicoStack.Screen name="Cursos Técnicos" component={Tecnico} />
            <TecnicoStack.Screen name="Tec Alimentos" component={Alimentos} />
            <TecnicoStack.Screen name="Tec Apicultura" component={Apicultura} />
            <TecnicoStack.Screen name="Tec Informatica" component={Informatica} />
        </TecnicoStack.Navigator>
    )
}

function superiorStackScreen() {
    return (
        <SuperiorStack.Navigator>
            <SuperiorStack.Screen name="Cursos Superiores" component={Superior} />
            <SuperiorStack.Screen name="Analise de Sistemas" component={Ads} />
            <SuperiorStack.Screen name="Quimica" component={Quimica} />
        </SuperiorStack.Navigator>
    )
}

export function Routes() {
    return (
        <TabNav.Navigator
            tabBarOptions={{
                labelPosition: 'beside-icon',
                activeTintColor: '#2f9e41',
                labelStyle: {
                    fontSize: 14,
                    fontWeight: '500',
                },
                inactiveTintColor: '#B7B7CC'
            }}
            >
            <TabNav.Screen name="Home"
                options={{
                    tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />,
                    title: 'Home',
                }}
                component={Home} />

            <TabNav.Screen name="Tecnico" 
                options={{
                    tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color="black" />,
                    title: 'Técnico',
                }}
                component={tecnicoStackScreen} />

            <TabNav.Screen name="Superior"
                options={{
                    tabBarIcon: () => <FontAwesome5 name="user-graduate" size={24} color="black" />,
                    title: 'Superior',
                }}
                component={superiorStackScreen} />
        </TabNav.Navigator>
    )
}