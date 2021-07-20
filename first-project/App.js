import React from "react";
import { Text, View, StyleSheet, Image, Button, ToastAndroid, TouchableOpacity} from 'react-native'
import cubeImage from './res/black-cube.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Hola usuario
      </Text>

      <Image source={cubeImage}
        style={styles.image}/>

      <TouchableOpacity
        style={styles.button}
        onPress={actionButtonIngresar}>
          <Text style={styles.buttonText}>
            Ingresar
          </Text>
      </TouchableOpacity>
    </View>)
}

const actionButtonIngresar = () => {
  ToastAndroid.show("Bienvenido a la matrix", 5000);
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "crimson"
    },
  title: {
    fontSize: 42,
    color: "#FFFF"
  },
  image: {
    height: 150,
    width: 150,
    margin: 25
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  buttonText: {color: "white", fontSize: 25}
})
export default App;