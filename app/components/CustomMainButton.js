import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function CustomMainButton({ title, myFunc }) {
    return (
        <TouchableOpacity style={styles.button} onPress={myFunc}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderColor: colors.primary,
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.primary,
        fontSize: 18

    },
});

export default CustomMainButton;