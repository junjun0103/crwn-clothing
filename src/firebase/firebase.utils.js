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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log('error::', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
