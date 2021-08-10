import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    Button
} from 'react-native';

export default function LogInScreen({navigation}) {
    const [username, onChangeUsername] = useState(null);
    const [password, onChangePassword] = useState(null);

    const logInAction = () => {
        console.log(`Username: ${username}, password: ${password}`)
        navigation.replace('UserTabNavigation',{ username: username, password: password });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="grey"
                onChangeText={onChangeUsername}
                value={username}
                autoCompleteType="username"
            />
            <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="grey"
                onChangeText={onChangePassword}
                value={password}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.logInButton}
                onPress={logInAction}>
                <Text style={styles.logInTextButton}>
                    LogIn
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        alignItems: "flex-start",
        marginBottom: 30
    },
    inputText: {
        height: 40,
        width: 250,
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 20,
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        fontSize: 20
    },
    logInButton: {
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderColor: "crimson"
    },
    logInTextButton: {
        color: "white",
        fontSize: 25
    }
});

