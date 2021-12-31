import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdH1Egu6-_ujnYbBpNYKQJvDENbF_paIs",
  authDomain: "electron-chat-b9560.firebaseapp.com",
  projectId: "electron-chat-b9560",
  storageBucket: "electron-chat-b9560.appspot.com",
  messagingSenderId: "902361574105",
  appId: "1:902361574105:web:c3180abfd00b0e65bbacc8",
  measurementId: "G-FKS47MLCXH",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig).firestore();
