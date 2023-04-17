import firebase from './firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB50ngavmYt6R1M3BjEtaOI9P_Ox6QWXRg",
    authDomain: "tinder-clone-d.firebaseapp.com",
    projectId: "tinder-clone-d",
    storageBucket: "tinder-clone-d.appspot.com",
    messagingSenderId: "200951982748",
    appId: "1:200951982748:web:cd15efd09423365860db59",
    measurementId: "G-S81FGPR7B4"
  };

 firebase.initializeApp(firebaseConfig);

  export default firebase;