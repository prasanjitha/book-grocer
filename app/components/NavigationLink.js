import { useNavigation } from '@react-navigation/native';
import React from 'react';

function NavigationLink({ navigationRoute }) {
    const navigation = useNavigation();
    // () => navigation.navigate('Tweet')
    console.log('licked')
    return (
        <Button title='Click' onPress={() => navigation.navigate('Tweet')} />
    )
}

export default NavigationLink;