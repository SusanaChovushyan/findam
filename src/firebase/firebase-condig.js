// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC594AxFzTv_JdDFzeMdiYnzpqxibUxKbg",
  authDomain: "find-am-45016.firebaseapp.com",
  projectId: "find-am-45016",
  storageBucket: "find-am-45016.appspot.com",
  messagingSenderId: "164627781334",
  appId: "1:164627781334:web:8ce4c4a8c464dcb41cdb77",
  measurementId: "G-XQQWD93KPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)