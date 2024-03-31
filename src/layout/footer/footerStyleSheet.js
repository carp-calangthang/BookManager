import react from "react";
import { StyleSheet } from "react-native";

export const footerStylesheet = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // Change this line
        width: "100%",
        position: "absolute", // Use absolute positioning
        bottom: 0, // Position at the bottom
        left: 0, // Align to the left
        padding: 10,
        borderTopWidth: 0.5,
    },

    footer_button: {
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white'
    }
});