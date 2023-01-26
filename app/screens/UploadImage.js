import React, { useState } from 'react';
import { Alert, Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCdtAKzffo4Ph_nUtTfmKPeJck2W_NBvbA",
    authDomain: "bordima-45b21.firebaseapp.com",
    databaseURL: "https://bordima-45b21-default-rtdb.firebaseio.com",
    projectId: "bordima-45b21",
    storageBucket: "bordima-45b21.appspot.com",
    messagingSenderId: "95041535486",
    appId: "1:95041535486:web:148437afe2b753ef1e14af",
    measurementId: "G-MKDC108LB2"
};
const app = firebase.initializeApp(firebaseConfig);
var storage = app.storage();


function UploadImage(props) {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    }
    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri);
        console.log('response');
        const blob = await response.blob();
        const fileName = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        var ref = await storage.ref().child(fileName).put(blob);
        try {

        } catch (e) {
            console.log(e);
        }
        setUploading(false);
        Alert.alert('uploadded');
        setImage(null);

    }
    return (
        <View style={{ top: 200 }}>
            <Button title='Pick Image from ggallary' onPress={pickImage} />
            <Button title='Upload Image' onPress={uploadImage} />
            {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 300 }} />}
        </View>
    );
}

export default UploadImage;