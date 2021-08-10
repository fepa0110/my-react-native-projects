import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native'
import cubeImage from './res/black-cube.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFiles from 'anonymous-files';

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

    if (pickerResult.cancelled === true) return;

    if(Platform.OS === "web"){
      const remoteUri = await uploadToAnonymousFiles(pickerResult.uri);
      setSelectedImage({localUri: pickerResult.uri, remoteUri: remoteUri});
      console.log(selectedImage.remoteUri);
    }
    else setSelectedImage({ localUri: pickerResult.uri });
  }

  const openShareDialog = async() => {
    if(!(await Sharing.isAvailableAsync())){
      alert(`La imagen esta disponible en: ${selectedImage.remoteUri !== null ? selectedImage.remoteUri : ""}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hola usuario
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image source={{ uri: selectedImage !== null ? selectedImage.localUri : uriImage }}
          style={styles.image}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={openShareDialog}
        >
        <Text style={styles.buttonText}>
          Compartir
        </Text>
      </TouchableOpacity>
    </View>
  )
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