import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import colors from '../config/colors';

function CustomInput({ title, myFunc }) {
    return (
        <TextInput
            overflow="hidden"
            style={styles.inputText}
            placeholder={title}
            underlineColorAndroid="transparent"
            onChangeText={myFunc}
        />
    );
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: colors.lightGray,
        paddingLeft: 20,
        height: 40,
        width: "100%",
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 20,
        fontSize: 16,
    }
});
export default CustomInput;