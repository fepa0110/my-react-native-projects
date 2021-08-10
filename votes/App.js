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

import LogInScreen from './LogInScreen'
import HomeScreen from './HomeScreen'
import UserTabNavigation from './UserHomeTabNavigation';

export default function App() {
  const Stack = createStackNavigator();

  const logInAction = () => {
    console.log(`Username: ${username}, password: ${password}`)
  }

  const isSignedIn = false;
/*   const HomeScreen = ({ navigation, route }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Bienvenido {route.username}</Text>
      </SafeAreaView>
    );
  }; */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogInScreen" 
            component={LogInScreen} 
            options={headerStyle, { headerShown: false }}/>
        <Stack.Screen name="UserTabNavigation"
          component={UserTabNavigation} 
            options={headerStyle, { headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const headerStyle = {
  headerStyle: {
    backgroundColor: "midnightblue",
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
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
