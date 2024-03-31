import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Entypo, Feather, Ionicons, Fontisto, AntDesign, FontAwesome, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";

import { homeStylesheet as styles } from "./homeStylesheet";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

function HomeScreen() {
    const [selectedValue, setSelectedValue] = useState('');
    return (

        <SafeAreaView style={styles.container}>

            <Header /> 

            <ScrollView 
            style={styles.main_scroll}
            vertical={true} 
            showsVerticalScrollIndicator={false}
            >

                {/* ------------------- Category suggest ------------------------- */}

                <SafeAreaView style={styles.category}>
                    <TouchableOpacity style={styles.category_button}>
                        <FontAwesome name="line-chart" size={24} color="black" />
                        <Text>Bảng xếp hạng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button}>
                        <MaterialIcons name="rate-review" size={24} color="black" />
                        <Text>Đánh giá cao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category_button}>
                        <FontAwesome6 name="magnifying-glass-chart" size={24} color="black" />
                        <Text>Thể loại nổi bật</Text>
                    </TouchableOpacity>
                </SafeAreaView>

                {/* ------------------- Suggest ------------------------- */}

                <SafeAreaView style={styles.suggest}>
                    <Text style={styles.title}>Đề Xuất</Text>
                    <ScrollView 
                        style={styles.books_scroll} 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    >                
                        <View style={styles.books_scroll_items}>
                            <View style={styles.books_item}>
                                <Image 
                                    source={require("../../public/images/book1.jpg")}
                                    style={styles.books_thumbnail}
                                />
                                <View style={styles.books_infomation}>
                                    <Text style={styles.book_title}>Think Python</Text>
                                    <View style={styles.book_rating}>
                                        <AntDesign style={styles.rating_count} name="star" size={18} color="#fcc00d" />
                                        <Text>4.5</Text>
                                    </View>
                                    <View style={styles.description_books}>
                                        <Text style={styles.book_price}>$14</Text>
                                        <TouchableOpacity style={styles.buy_button}>
                                            <AntDesign name="pluscircle" size={24} color="#faa200" />
                                        </TouchableOpacity>                                
                                    </View>                        
                                </View>
                            </View>                
                        </View>
                    </ScrollView>
                </SafeAreaView>

                {/* ------------------- Best Sales ------------------------- */}
                
                <SafeAreaView style={styles.bestseller}>
                    <Text style={styles.sale_title}>Bán Chạy Nhất</Text>
                    <ScrollView 
                        style={styles.bestsale_scroll} 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    >                
                        <View style={styles.books_scroll_items}>
                            <View style={styles.books_item}>
                                <Image 
                                    source={require("../../public/images/book1.jpg")}
                                    style={styles.books_thumbnail}
                                />
                                <View style={styles.books_infomation}>
                                    <Text style={styles.book_title}>Think Python</Text>
                                    <View style={styles.book_rating}>
                                        <AntDesign style={styles.rating_count} name="star" size={18} color="#fcc00d" />
                                        <Text>4.5</Text>
                                    </View>
                                    <View style={styles.description_books}>
                                        <Text style={styles.book_price}>$14</Text>
                                        <TouchableOpacity style={styles.buy_button}>
                                            <AntDesign name="pluscircle" size={24} color="#faa200" />
                                        </TouchableOpacity>                                
                                    </View>                        
                                </View>
                            </View>                
                        </View>
                    </ScrollView>
                </SafeAreaView>

                {/* ------------------- New Books ------------------------- */}
                <SafeAreaView style={styles.bestseller}>
                    <Text style={styles.sale_title}>Sách Mới</Text>
                    <ScrollView 
                        style={styles.bestsale_scroll} 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    >                
                        <View style={styles.books_scroll_items}>
                            <View style={styles.books_item}>
                                <Image 
                                    source={require("../../public/images/book1.jpg")}
                                    style={styles.books_thumbnail}
                                />
                                <View style={styles.books_infomation}>
                                    <Text style={styles.book_title}>Think Python</Text>
                                    <View style={styles.book_rating}>
                                        <AntDesign style={styles.rating_count} name="star" size={18} color="#fcc00d" />
                                        <Text>4.5</Text>
                                    </View>
                                    <View style={styles.description_books}>
                                        <Text style={styles.book_price}>$14</Text>
                                        <TouchableOpacity style={styles.buy_button}>
                                            <AntDesign name="pluscircle" size={24} color="#faa200" />
                                        </TouchableOpacity>                                
                                    </View>                        
                                </View>
                            </View>                
                        </View>
                    </ScrollView>
                </SafeAreaView>

                {/* ------------------- bottom category ------------------------- */}
                
                <SafeAreaView style={styles.history}>
                    <View>
                        <Text style={styles.history_title}>Lịch sử đọc</Text>
                        <View style={styles.history_items}>
                            <Image 
                                source={require("../../public/images/book1.jpg")}
                                style={styles.history_books_thumbnail}
                            />
                            <View style={styles.title_items}>
                                <Text style={styles.history_book_title}>Think Python</Text>
                                <View style={styles.subtitle}>
                                    <AntDesign style={styles.rating_count} name="star" size={18} color="#fcc00d" />
                                    <Text>4.5</Text>
                                </View>
                            </View>
                            <View style={styles.views}>
                                <AntDesign name="eye" size={24} color="black" />
                                <Text style={styles.views_count}>100K</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>

            </ScrollView>

            <Footer />
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default HomeScreen;