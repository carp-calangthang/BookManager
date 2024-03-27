import react from "react";
import { StyleSheet } from "react-native";

export const homeStylesheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "black",
        position: "absolute",
        top: 100,
        left: 20,
    },

    books_scroll: {
        flexDirection: "row",
        marginTop: 140,
        paddingHorizontal: 20,
    },

    books_scroll_items: {
        marginRight: 10,
    },

    books_item: {
        backgroundColor: "#F4E1D2",
        borderRadius: 20,
        padding: 10,
    },

    book_rating: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    books_infomation: {
        width: 100,        
        marginTop: 10,
    },

    books_thumbnail: {
        marginTop: 10,
        width: 100,
        height: 140,
        borderRadius: 20,
    },

    book_title: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black",
    },

    description_books: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },

    book_price: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "#D4A058",
        marginRight: 10,
    },

    buy_button: {
        padding: 5,
        borderRadius: 5,
        position: "absolute",
        right: 0
    },

});