import React from "react";
import { Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from "react-native";

import { headerStyle } from './headerStyleSheet';
import LoginScreen from "../../login/loginScreen";

export default function Header () {
        const navigation = useNavigation();
        return (
        <View style={headerStyle.header}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Entypo name="menu" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    console.log('Image button pressed');
                }}
            >
                <Image 
                    style={headerStyle.image} 
                    source={require("../../../public/images/logo.jpg")}
                />
            </TouchableOpacity>           
        </View>
    );
    
};