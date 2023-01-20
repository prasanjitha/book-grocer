import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import BackButton from '../components/BackButton';
import { userLogout } from '../redux/user-actions';

function Home(props) {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.mainContainer} >
            <View>
                <Button title='Log out' onPress={() => {
                    dispatch(userLogout(props));
                }} />
                <Text>Main Home</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
export default Home;