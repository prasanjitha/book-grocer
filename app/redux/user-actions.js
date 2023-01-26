export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PAWWSORD = 'SET_PAWWSORD';
export const SET_GROUP_CODE = 'SET_GROUP_CODE';
export const SET_PHONE = 'SET_PHONE';
export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_IS_LOADING = 'SET_IS_LOADING';

import Toast from 'react-native-toast-message';
import { firebase } from '../config/firebase';

export const setFirstName = firstName => dispatch => {
    dispatch({
        type: SET_FIRST_NAME,
        payload: firstName,
    });
};
export const setLastName = lastName => dispatch => {
    dispatch({
        type: SET_LAST_NAME,
        payload: lastName,
    });
};
export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};
export const setPassword = password => dispatch => {
    dispatch({
        type: SET_PAWWSORD,
        payload: password,
    });
};
export const setGroupCode = code => dispatch => {
    dispatch({
        type: SET_GROUP_CODE,
        payload: code,
    });
};
export const setPhone = phone => dispatch => {
    dispatch({
        type: SET_PHONE,
        payload: phone,
    });
};
export const setIsLoading = () => dispatch => {
    dispatch({
        type: SET_IS_LOADING,
        payload: true,
    });
};

export const submitUserData = (data, props) => async dispatch => {
    try {
        console.log('data', data);
        dispatch({
            type: SET_IS_LOADING,
            payload: true,
        });
        const email = data.email;
        const password = data.password;
        console.log('Add data to the firestore database');
        // await firebase.firestore().collection('userrs').doc('auth.currentUser!.uid').set({
        //     "FirstName": 'firstName',
        //     "LastName": 'lastName',
        //     "role": 'role',
        //     "email": 'email',
        //     "province": '',
        //     "town": '',
        //     "userId": ' auth.currentUser!.uid'
        // }).then(() => {
        //     console.log('user added!')
        // }).catch((err) => {
        //     console.log(err);
        // });
        await firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            });

        props.navigation.navigate('SignIn')
        dispatch({
            type: SET_IS_LOADING,
            payload: false,
        });
        dispatch({
            type: SUBMIT_USER_DATA,
            payload: data,
        });
    } catch (error) {
    }
}

export const userLogin = (data, props) => async dispatch => {
    try {
        dispatch({
            type: SET_IS_LOADING,
            payload: true,
        });
        const email = data.email;
        const password = data.password;
        await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('User account created & signed in!');
            Toast.show({
                type: 'success',
                text1: 'Hello',
                text2: 'This is some something 👋'
            });
            props.navigation.navigate('Home')
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
        dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({
            type: USER_LOGIN,
            payload: data,
        });
    } catch (error) {
    }
}

export const userLogout = (props) => async dispatch => {
    try {
        await firebase.auth().signOut();
        props.navigation.navigate('OnboardingOne')
    } catch (e) {
        console.log(e);
    }
}