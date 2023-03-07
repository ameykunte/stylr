import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZ_S3C1eLuwIGZ3blNnjrRuiFJODpNrTY",
  authDomain: "stylr-a3916.firebaseapp.com",
  projectId: "stylr-a3916",
  storageBucket: "stylr-a3916.appspot.com",
  messagingSenderId: "676725106448",
  appId: "1:676725106448:web:4bb5b3e90346f76ec76795",
  measurementId: "G-Q0DQ5HT52V"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;