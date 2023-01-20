import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';

import BackButton from '../components/BackButton';
import CheckBox from '../components/CheckBox';
import CustomInput from '../components/CustomInput';
import CustomMainButton from '../components/CustomMainButton';
import { setEmail, setGroupCode, setPassword, userLogin } from '../redux/user-actions';
import colors from '../config/colors';


function SignIn(props) {
    const [music, setMusic] = useState(false);
    const { email, password, isLoading } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();
    // const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View >
                <Spinner
                    visible={isLoading}
                    textContent={'Wating...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <BackButton />
                <Text style={styles.signInText}>Sign In</Text>
                <CustomInput title="Optional Group Special Code" myFunc={(value) => dispatch(setGroupCode(value))} />
                <CustomInput title="Emial Address" myFunc={(value) => dispatch(setEmail(value))} />
                <CustomInput title="Password" myFunc={(value) => dispatch(setPassword(value))} />
                <View style={styles.passwordText}>
                    <CheckBox
                        onPress={() => setMusic(!music)}
                        title="Stay Logged In"
                        isChecked={music}
                    />
                    <Text>Forgot Your Password?</Text>
                </View>


                <CustomMainButton title='Sign In' myFunc={() => {
                    const data = {
                        email: email,
                        password: password,
                    }
                    dispatch(userLogin(data, props))
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
    spinnerTextStyle: {
        color: colors.white
    },
    passwordText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 10,
    }

});

export default SignIn;