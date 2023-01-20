import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

function CustomFlatButton({ title, tap }) {
    return (
        <TouchableOpacity style={styles.button} onPress={tap} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18

    },
});
export default CustomFlatButton;