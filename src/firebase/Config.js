import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLYh3Rnk_vJEx7U6ja9--hHP-iDoa_0Tk',
  authDomain: 'cooking-expert-smit.firebaseapp.com',
  projectId: 'cooking-expert-smit',
  storageBucket: 'cooking-expert-smit.appspot.com',
  messagingSenderId: '283354681670',
  appId: '1:283354681670:web:c16080e8afd25bb4b39547',
};

//init firebase app
//this method connects us to firebase backend now we can use any firebase services
firebase.initializeApp(firebaseConfig);

//in order to use firebase services we need to initialize those individually
//init firestore , this method return us an object then we cn use to interact with firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
