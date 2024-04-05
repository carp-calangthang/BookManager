
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import { RegisterStylesheet as styles }  from './registerStyle';
import axios from '../component/axios';

function RgInputScreen() {
    const navigation = useNavigation();

    // set initial state of username and password   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ email, setEmail] = useState('');
    const [ rePassword, setRePassword] = useState('');

    // update state of username
    const handleUsernameChange = username => {
        setUsername(username);
    };

    // update state of password
    const handlePasswordChange = password => {
        setPassword(password);
    };

    const handleRepasswordChange = rePassword => {
        setRePassword(rePassword);
    };

    const handleEmailChange = email => {
        setEmail(email);
    };

    const handleRg = () => {
        console.log('Register button pressed');
        if (password !== rePassword) {
            console.log('Passwords do not match');
            return;
        }
        axios.post('/register', {
            username: username,
            email: email,
            password: password
        })
        .then(response => {
            console.log(response.data);
            setLoginMessage(response.data.message);
            navigation.navigate('LoginInput');
        })
        .catch(error => {
            console.log(error);
        })
    };

    // useEffect(() => {
    //     console.log('username: ', username);
    //     console.log('email: ', email);
    //     console.log('password: ', password);
    //     console.log('rePassword: ', rePassword);
    // });

    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={350}
        >
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
                            value={email}
                            onChangeText={handleEmailChange}
                            placeholder='Email' 
                            style={styles.TextInput} 
                        />
                        <TextInput 
                            value={password}
                            onChangeText={handlePasswordChange}
                            placeholder='Password'
                            style={styles.TextInput} 
                        />
                        <TextInput 
                            value={rePassword}
                            onChangeText={handleRepasswordChange}
                            placeholder='Retype Password' 
                            style={styles.TextInput} 
                        />
                    </View>

                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#fc4401', '#fd1d8b']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LoginButton}>
                        <TouchableOpacity
                            onPress={handleRg}
                        >
                            <Text style={styles.LoginButtonTxt}>SIGN UP</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <View style={styles.Sign}>
                        <Text style={styles.SignTitle}>Already have an account?</Text>
                        <TouchableOpacity 
                            style={styles.SignButton}
                            onPress={() => {navigation.navigate('LoginInput');}}                    
                        >
                            <Text style={styles.CreateButtonTxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>                
                </View>           

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default RgInputScreen;