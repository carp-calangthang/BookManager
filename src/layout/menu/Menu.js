import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../home/homeScreen';
import LoginScreen from '../../login/loginScreen';

const Drawer = createDrawerNavigator();

export default function Menu_Item() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerStyle={{ backgroundColor: 'black' }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
