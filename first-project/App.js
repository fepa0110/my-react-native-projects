import React, { useState } from "react";
import { Text, 
  View, 
  StyleSheet, 
  Image, 
  ToastAndroid, 
  TouchableOpacity, 
  Alert } from 'react-native'
import cubeImage from './res/black-cube.png';
import * as ImagePicker from 'expo-image-picker';

const uriImage = "https://picsum.photos/150/150";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult === true) return;

    setSelectedImage({ localUri: pickerResult.uri });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hola usuario
      </Text>

      <Image source={{ uri: selectedImage !== null ? selectedImage.localUri : uriImage}}
        style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>
          Cambiar
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
    margin: 25,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  buttonText: { color: "white", fontSize: 25 }
})

export default App;