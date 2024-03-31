import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Entypo, Feather, Ionicons, Fontisto, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native"

import { footerStylesheet as styles } from "./footerStyleSheet";

export default function Footer () {
    return (
        <View style={styles.footer}>
            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <MaterialCommunityIcons name="menu-open" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <AntDesign name="find" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Ionicons name="library" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Ionicons name="bag-sharp" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Fontisto name="search" size={24} color="black" />
            </TouchableOpacity>

        </View>
    );
};