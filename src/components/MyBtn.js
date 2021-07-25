import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MyStyles from '../styles/MyStyles';

export function MyBtn(props) {
    return (
        <View>
            <TouchableOpacity style={MyStyles.btn} onPress={props.onPress}>
                <Text style={MyStyles.txtBtn}>
                    {props.titulo}
                </Text>    
            </TouchableOpacity>
        </View>
    )
}