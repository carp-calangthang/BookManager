import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Entypo, Feather, Ionicons, Fontisto } from '@expo/vector-icons';
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
                <Feather name="book-open" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Ionicons name="library" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Ionicons name="bag-sharp" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.footer_button}
                onPress={() => {
                    console.log("Menu button pressed");
                }}
            >
                <Fontisto name="search" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};