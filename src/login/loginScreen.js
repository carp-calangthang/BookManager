
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import { loginStylesheet as styles }  from './loginStyle';

function LoginScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Image
                    style={styles.logo}
                    source={require("../../public/images/logo/REABOK.png")}
                />
                <Text style={styles.LoginTitle} >Login to your account</Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('LoginInput');
                    }}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#fc4401', '#fd1d8b']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LoginButton}>
                        
                            <Text style={styles.LoginButtonTxt}>SIGN IN</Text>
                        
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                        onPress={() => {
                            console.log('Login button pressed');
                        }}
                >
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#eb4a3d', '#fabf1d']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.GoogleLogin}
                    >                        
                        <AntDesign name="google" size={24} color="white" />
                        <Text style={styles.GoogleLoginTxt}>Continute with Google</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={styles.Reg}>
                    <Text style={styles.RegTitle}>Don't have an account?</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate('RgInput');
                        }}
                        style={styles.CreateButton} >
                        <Text style={styles.CreateButtonTxt}>Create</Text>
                    </TouchableOpacity>
                </View>                
            </View>           

            <StatusBar style="auto" />
            
        </SafeAreaView>
    );    
};

export default LoginScreen;