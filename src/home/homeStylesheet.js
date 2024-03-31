import react from "react";
import { StyleSheet } from "react-native";

export const homeStylesheet = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    main_scroll: {
        width: "100%",
        height: "100%",
        marginTop: 20,
        marginBottom: 65
    },

    // ------------------- Category -------------------------

    category: {
        flexDirection: "row",
        marginHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        justifyContent: "space-between",
    },

    category_button: {
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'white',
        marginRight: 10,
        backgroundColor: "#f7ddad",
        justifyContent: "center",
        alignItems: "center",
    },

    // ------------------- Suggest -------------------------

    suggest: {
        marginBottom: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#000",
        position: "absolute",
        top: 20,
        left: 20,
    },

    books_scroll: {
        flexDirection: "row",
        marginTop: 70,
        paddingHorizontal: 20,
    },

    books_scroll_items: {
        marginRight: 10,
    },

    books_item: {
        backgroundColor: "#f7ddad",
        borderRadius: 20,
        padding: 10,
    },

    book_rating: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    rating_count: {
        marginRight: 5,
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
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black",
    },

    description_books: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    book_price: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "#faa200",
        marginRight: 10,
    },

    buy_button: {
        padding: 5,
        borderRadius: 5,
        position: "absolute",
        right: 0
    },


    // ------------------- Best Sales -------------------------

    bestseller: {
        marginBottom: 20,
    },

    sale_title: {
        fontSize: 26,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#000",
        position: "absolute",
        top: 20,
        left: 20,
    },

    bestsale_scroll: {
        flexDirection: "row",
        marginTop: 70,
        paddingHorizontal: 20,
    },

    // ------------------- history -------------------------

    history: {
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },

    history_title: {
        fontSize: 26,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#000",
    },

    history_items: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#f7ddad",
        borderRadius: 20,
    },

    history_books_thumbnail: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        width: 50,
        height: 90,
        borderRadius: 8,
    },

    title_items: {
        flexDirection: "column",
        marginLeft: 20,
    },

    history_book_title: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black",
    },

    subtitle: { 
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    views: {
        position: "absolute",
        right: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    views_count: {
        marginLeft: 5,
        fontWeight: "bold",
        fontFamily: "Roboto",
    },

});