import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import CustomFlatButton from '../components/CustomFlatButton';
import NavigationLink from '../components/NavigationLink';
import colors from '../config/colors';

function OnboardingOne(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View >
                <Text style={styles.titleText}>Books For</Text>
                <Image style={styles.image} source={require('../assets/Group_94.png')} />
                <CustomFlatButton title="Sign In" tap={() => navigation.navigate('SignIn')} />
                <CustomFlatButton title="Sign Up" tap={() => navigation.navigate('SignUp')} />


            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 34,
        color: colors.primary,
        fontWeight: 'bold',
        paddingBottom: 80,
        alignSelf: 'center'

    },

    mainContainer: {
        paddingBottom: 20,
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "flex-end",


    },
    image: {
        width: 320,
        height: 250,
        marginBottom: 40,
    }

});

export default OnboardingOne;