import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from "react-native";

import { headerStyle } from './headerStyleSheet';
import LoginScreen from "../../login/loginScreen";

export default function Header () {
        const navigation = useNavigation();
        return (
        <View style={headerStyle.header}>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
            >
                <AntDesign name="shoppingcart" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image 
                    style={headerStyle.image} 
                    source={require("../../../public/images/logo.jpg")}
                />
            </TouchableOpacity>           
        </View>
    );
    
};