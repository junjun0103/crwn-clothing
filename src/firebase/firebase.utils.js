import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIg4ysp1_6KYFVpIAXf_QPaq_-lD9q1qQ',
  authDomain: 'crwn-db-a257b.firebaseapp.com',
  databaseURL: 'https://crwn-db-a257b.firebaseio.com',
  projectId: 'crwn-db-a257b',
  storageBucket: 'crwn-db-a257b.appspot.com',
  messagingSenderId: '857490497584',
  appId: '1:857490497584:web:8ce5cdb180a3deb7a18df5',
  measurementId: 'G-ZHK6BEGLWK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
