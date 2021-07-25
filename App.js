import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import MyStyles from './src/styles/MyStyles';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <SafeAreaView style={MyStyles.droidSafeArea}>
        <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
}