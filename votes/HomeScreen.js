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

export default function HomeScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bienvenido Usuario</Text>
        </SafeAreaView>
    );

    /* return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    ); */
}

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
        borderColor: "crimson",
        borderRadius: 20,
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        fontSize: 20
    }
});

