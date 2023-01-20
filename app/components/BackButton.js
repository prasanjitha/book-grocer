import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

function BackButton(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/chevron.png')} />
        </TouchableOpacity>
    );
}

export default BackButton;