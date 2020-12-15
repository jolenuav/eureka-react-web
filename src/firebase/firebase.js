import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './enviroments/enviroment-prod';

firebase.initializeApp(firebaseConfig);

export default firebase;