import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdtAKzffo4Ph_nUtTfmKPeJck2W_NBvbA",
    authDomain: "bordima-45b21.firebaseapp.com",
    databaseURL: "https://bordima-45b21-default-rtdb.firebaseio.com",
    projectId: "bordima-45b21",
    storageBucket: "bordima-45b21.appspot.com",
    messagingSenderId: "95041535486",
    appId: "1:95041535486:web:148437afe2b753ef1e14af",
    measurementId: "G-MKDC108LB2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };