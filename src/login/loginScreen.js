import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// useState is a hook that allows you to have state variables in functional components

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState(''); // create username state varible with empty string
    const [password, setPassword] = useState(''); // create password state varible with empty string
};