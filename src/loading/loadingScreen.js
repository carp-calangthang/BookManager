import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { loadingStylesheet as styles } from "./loadingStyleSheet";

function LoadingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require("../../public/images/logo/REABOK.png")}
                style={styles.loading}
            />
            <ActivityIndicator size="large" color="#000" />
        </SafeAreaView>
    );
};
export default LoadingScreen;