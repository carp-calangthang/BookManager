import react from "react";
import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // Change this line
        width: "100%",
        top: 20, // Position at the top
        left: 0, // Align to the left
        padding: 10,
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
});