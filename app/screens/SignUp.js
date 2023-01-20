import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../components/BackButton';
import CheckBox from '../components/CheckBox';
import CustomInput from '../components/CustomInput';
import CustomMainButton from '../components/CustomMainButton';
import colors from '../config/colors';
import { setFirstName, setLastName, setEmail, setPhone, setGroupCode, setPassword, submitUserData } from '../redux/user-actions';

function SignUp(props) {
    const { firstName, lastName, email, password, code, phone, isLoading } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();
    const [music, setMusic] = useState(false);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View >
                <BackButton />
                <Text style={styles.signInText}>Sign Up</Text>
                <CustomInput title="First Name" myFunc={(value) => dispatch(setFirstName(value))} />
                <CustomInput title="Last Name" myFunc={(value) => dispatch(setLastName(value))} />
                <CustomInput title="Emial Address" myFunc={(value) => dispatch(setEmail(value))} />
                <CustomInput title="Mobile Phone" myFunc={(value) => dispatch(setPhone(value))} />
                <CustomInput title="Group Special Code (optional)" myFunc={(value) => dispatch(setGroupCode(value))} />
                <CustomInput title="Password" myFunc={(value) => dispatch(setPassword(value))} />
                <CheckBox
                    onPress={() => setMusic(!music)}
                    title="Please sign me up for the monthly newsletter."
                    isChecked={music}
                />

                <CustomMainButton title='Sign Up' myFunc={() => {
                    const data = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        code: code,
                        password: password,
                    }
                    dispatch(submitUserData(data, props))
                }
                } />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        top: 20,
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    signInText: {
        fontWeight: 'bold',
        fontSize: 32,
        paddingTop: 20,
        paddingBottom: 40,
    },
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

export default SignUp;