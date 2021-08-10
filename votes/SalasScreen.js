import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Alert,
    FlatList,
    ListItem,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    Button
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import SalasMock from './mocks/salas.json'

export default function SalasScreen() {
    const [message, setMessage] = useState("");

    const row = (item) => {
        const nombreSala = item.nombre;
        return (
            <View>
                <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() => { setMessage(nombreSala) }}>
                    <Text style={{
                        color: "white",
                        fontSize: 25}}>
                            <Ionicons style={{paddingRight:10}} name="person-circle" size={25} color={"white"} />
                            {nombreSala}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, color: "blue"}}>{message}</Text>
            <FlatList
                data={SalasMock}
                renderItem={
                    ({ item }) => row(item)}
            />
        </View>
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
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemButton: {
        backgroundColor: "navy",
        borderColor: "crimson"
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

