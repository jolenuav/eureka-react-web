import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './enviroments/enviroment-test';

firebase.initializeApp(firebaseConfig);

export default firebase;