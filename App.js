import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import { AppNavigator } from './src/component/AppNavigator';

export default function App() {
    return (
      <AppNavigator />
  );
};

