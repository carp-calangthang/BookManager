import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';

import { loginStylesheet as styles }  from './loginStyle';

function LoginInputScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.base}>
                <Image
                    style={styles.logo_2}
                    source={require("../../public/images/logo/REABOK.png")}
                />                
                <View style={styles.TextInputBase}>
                    <TextInput placeholder='Username' style={styles.TextInput}></TextInput>
                    <TextInput placeholder='Password' style={styles.TextInput}></TextInput>
                </View>

                <LinearGradient
                    // Button Linear Gradient
                    colors={['#fc4401', '#fd1d8b']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.LoginButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home');
                        }}>
                        <Text style={styles.LoginButtonTxt}>SIGN IN</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.Forgot}>
                    <TouchableOpacity style={styles.ForgotButton} >
                        <Text style={styles.ForgotButtonTxt}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Reg}>
                    <Text style={styles.RegTitle}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.CreateButton} >
                        <Text style={styles.CreateButtonTxt}>Create</Text>
                    </TouchableOpacity>
                </View>                
            </View>           

        </SafeAreaView>
    );
};

export default LoginInputScreen;