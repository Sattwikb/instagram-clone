import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBswHErU4N2MmXqsD0fVrUyDiQozXSi_2w",
    authDomain: "instagram-clone-react-6df11.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-6df11.firebaseio.com",
    projectId: "instagram-clone-react-6df11",
    storageBucket: "instagram-clone-react-6df11.appspot.com",
    messagingSenderId: "575699752412",
    appId: "1:575699752412:web:5d6eac6f44e111ed332b19",
    measurementId: "G-RPPQ25L8BG"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };