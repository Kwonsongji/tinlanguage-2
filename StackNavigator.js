import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
// create navigator;
const Stack = createNativeStackNavigator()
// createNativeStackNavigator est une fnct qui renvoie un objet contenant 2 propriétés : Screenet Navigator
const StackNavigator = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </StackNavigator>
  )
}

export default StackNavigator
