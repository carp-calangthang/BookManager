
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, SafeAreaView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import { loginStylesheet as styles }  from './loginStyle';
import axios from '../component/axios';

function LoginInputScreen() {
    const navigation = useNavigation();

    // set initial state of username and password   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    // update state of username
    const handleUsernameChange = username => {
        setUsername(username);
    };

    // update state of password
    const handlePasswordChange = password => {
        setPassword(password);
    };

    const handleLogin = () => {
        console.log('Login button pressed');
        axios.post('/login', {
            username: username,
            password: password
        })
        .then(response => {
            console.log(response.data.message);
            if (response.data.ping === '0') {
                Alert.alert('Invalid username or password');
                return;
            } else {    
                navigation.navigate('Home');
            };
        })
        .catch(error => {
            console.log(error);
        })
    };

    // useEffect(() => {
    //     console.log('username: ', username);
    //     console.log('password: ', password);
    // });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>

                <View style={styles.base}>
                    <Image
                        style={styles.logo_2}
                        source={require("../../public/images/logo/REABOK.png")}
                    />                
                    <View style={styles.TextInputBase}>
                        <TextInput 
                            value={username}
                            onChangeText={handleUsernameChange}
                            placeholder='Username' 
                            style={styles.TextInput} 
                        />
                        <TextInput 
                            value={password}
                            onChangeText={handlePasswordChange}
                            placeholder='Password' 
                            style={styles.TextInput} 
                        />
                    </View>

                    <TouchableOpacity
                            onPress={handleLogin}
                    >
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#fc4401', '#fd1d8b']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.LoginButton}>
                            
                                <Text style={styles.LoginButtonTxt}>SIGN IN</Text>
                            
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.Forgot}>
                        <TouchableOpacity style={styles.ForgotButton} >
                            <Text style={styles.ForgotButtonTxt}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Reg}>
                        <Text style={styles.RegTitle}>Don't have an account?</Text>
                        <TouchableOpacity 
                            style={styles.CreateButton} 
                            onPress={() => {
                                navigation.navigate('RgInput');
                            }}
                        >
                            <Text style={styles.CreateButtonTxt}>Create</Text>
                        </TouchableOpacity>
                    </View>                
                </View>     

            </SafeAreaView>
        </KeyboardAvoidingView> 
    );
};

export default LoginInputScreen;