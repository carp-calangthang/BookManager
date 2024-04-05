import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
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

                    <LinearGradient
                    colors={['#fc4401', '#fd1d8b']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.category_button_gradient}
                    >
                        <TouchableOpacity style={styles.category_button}>
                            <FontAwesome name="line-chart" size={24} color="white" />
                            <Text style={styles.category_button_text}>Bảng xếp hạng</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                    colors={['#fc4401', '#fd1d8b']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.category_button_gradient}
                    >
                    <TouchableOpacity style={styles.category_button}>
                        <MaterialIcons name="rate-review" size={24} color="white" />
                        <Text style={styles.category_button_text} >Đánh giá cao</Text>
                    </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                    colors={['#fc4401', '#fd1d8b']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.category_button_gradient}
                    >
                    <TouchableOpacity style={styles.category_button}>
                        <FontAwesome6 name="magnifying-glass-chart" size={24} color="white" />
                        <Text style={styles.category_button_text} >Thể loại nổi bật</Text>
                    </TouchableOpacity>
                    </LinearGradient>

                </SafeAreaView>

                {/* ------------------- Hot preview ------------------------- */}

                <SafeAreaView style={styles.preview}>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        style={styles.preview_scroll}>
                        <View style={styles.preview_items}>
                            <TouchableOpacity>
                                <Image
                                source={require("../../public/images/dune-cover.jpeg")}
                                style={styles.preview_image}
                                >
                                </Image>
                                <Text>
                                </Text>
                            </TouchableOpacity>                            
                        </View>
                        <View style={styles.preview_items}>
                            <TouchableOpacity>
                                <Image
                                source={require("../../public/images/dune-cover.jpeg")}
                                style={styles.preview_image}
                                >
                                </Image>
                                <Text>
                                </Text>
                            </TouchableOpacity>                            
                        </View>
                    </ScrollView>
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
                                    </View>                        
                                </View>
                            </View>                
                        </View>

                        <View style={styles.books_scroll_items}>
                            <View style={styles.books_item}>
                                <Image 
                                    source={require("../../public/images/dune.jpeg")}
                                    style={styles.books_thumbnail}
                                />
                                <View style={styles.books_infomation}>
                                    <Text style={styles.book_title}>Dune</Text>
                                    <View style={styles.book_rating}>
                                        <AntDesign style={styles.rating_count} name="star" size={18} color="#fcc00d" />
                                        <Text>4.5</Text>
                                    </View>
                                    <View style={styles.description_books}>
                                        <Text style={styles.book_price}>$14</Text>                             
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