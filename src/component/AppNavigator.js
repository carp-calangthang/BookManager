import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../home/homeScreen';
import LoginScreen from '../login/loginScreen';
import LoadingScreen from '../loading/loadingScreen';
import LoginInputScreen from '../login/loginInputScreen';

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Define Drawer Navigator
export const MenuDrawer = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#2e2e2e',
              width: 240,
              height: '90%',
              marginTop: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,    
            },
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
        }}
    >
      <Drawer.Screen
        options={{ headerShown: false }} 
        name="Home" 
        component={HomeScreen} />
      <Drawer.Screen 
        options={{ headerShown: false }} 
        name="Login" 
        component={LoginScreen} />
      <Drawer.Screen 
        options={{ headerShown: false }} 
        name="Loading" 
        component={LoadingScreen} />
    </Drawer.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }} 
        name="LoginInput" 
        component={LoginInputScreen} />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();
// Wrap Drawer Navigator inside NavigationContainer
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }} 
          name="MenuDrawer" 
          component={MenuDrawer} />
        <Stack.Screen
          options={{ headerShown: false }} 
          name="LoginInput" 
          component={LoginInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
