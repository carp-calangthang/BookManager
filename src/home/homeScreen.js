import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { Entypo, Feather, Ionicons, Fontisto, AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Image } from "react-native";

import { homeStylesheet as styles } from "./homeStylesheet";
import MenuListScreen from "../layout/menu/MenuListLayout";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

export default function HomeScreen() {
    const [selectedValue, setSelectedValue] = useState('');
    return (

        <View style={styles.container}>

            <Header /> 

            <Text style={styles.title}>Đề Xuất</Text>
            <ScrollView 
                style={styles.books_scroll} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >                
                <View style={styles.books_scroll_items}>
                    <View style={styles.books_item}>
                        <Image 
                            source={require("../../public/images/logo.jpg")}
                            style={styles.books_thumbnail}
                        />
                        <View style={styles.books_infomation}>
                            <Text style={styles.book_title}>Book Title</Text>
                            <View style={styles.book_rating}>
                                <AntDesign name="star" size={18} color="#f7d423" />
                                <Text>4.5</Text>
                            </View>
                            <View style={styles.description_books}>
                                <Text style={styles.book_price}>$14</Text>
                                <TouchableOpacity style={styles.buy_button}>
                                    <AntDesign name="pluscircle" size={24} color="#D4A058" />
                                </TouchableOpacity>                                
                            </View>                        
                        </View>
                    </View>                
                </View>

                <View style={styles.books_scroll_items}>
                    <View style={styles.books_item}>
                        <Image 
                            source={require("../../public/images/logo.jpg")}
                            style={styles.books_thumbnail}
                        />
                        <View style={styles.books_infomation}>
                            <Text style={styles.book_title}>Book Title</Text>
                            <View style={styles.book_rating}>
                                <AntDesign name="star" size={18} color="#f7d423" />
                                <Text>4.5</Text>
                            </View>
                            <View style={styles.description_books}>
                                <Text style={styles.book_price}>$14</Text>
                                <TouchableOpacity style={styles.buy_button}>
                                    <AntDesign name="pluscircle" size={24} color="#D4A058" />
                                </TouchableOpacity>                                
                            </View>                        
                        </View>
                    </View>                
                </View>

                <View style={styles.books_scroll_items}>
                    <View style={styles.books_item}>
                        <Image 
                            source={require("../../public/images/logo.jpg")}
                            style={styles.books_thumbnail}
                        />
                        <View style={styles.books_infomation}>
                            <Text style={styles.book_title}>Book Title</Text>
                            <View style={styles.book_rating}>
                                <AntDesign name="star" size={18} color="#f7d423" />
                                <Text>4.5</Text>
                            </View>
                            <View style={styles.description_books}>
                                <Text style={styles.book_price}>$14</Text>
                                <TouchableOpacity style={styles.buy_button}>
                                    <AntDesign name="pluscircle" size={24} color="#D4A058" />
                                </TouchableOpacity>                                
                            </View>                        
                        </View>
                    </View>                
                </View>
                
                <View style={styles.books_scroll_items}>
                    <View style={styles.books_item}>
                        <Image 
                            source={require("../../public/images/logo.jpg")}
                            style={styles.books_thumbnail}
                        />
                        <View style={styles.books_infomation}>
                            <Text style={styles.book_title}>Book Title</Text>
                            <View style={styles.book_rating}>
                                <AntDesign name="star" size={18} color="#f7d423" />
                                <Text>4.5</Text>
                            </View>
                            <View style={styles.description_books}>
                                <Text style={styles.book_price}>$14</Text>
                                <TouchableOpacity style={styles.buy_button}>
                                    <AntDesign name="pluscircle" size={24} color="#D4A058" />
                                </TouchableOpacity>                                
                            </View>                        
                        </View>
                    </View>                
                </View>

            </ScrollView>

            <Footer />
            
            <StatusBar style="auto" />
        </View>
    );
};