
import { Entypo} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from "react-native";

import { headerStyle } from './headerStyleSheet'; 

export default function Header() {
    return (
        <View style={headerStyle.header}>
            <TouchableOpacity 
                style={headerStyle.button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Entypo name="menu" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    style={headerStyle.image} 
                    source={require("../../../public/images/logo.jpg")}
                />
            </TouchableOpacity>           
        </View>
    );
};