// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZarJpj7JiJwKrETo-7iEidpVLfxuYjY",
  authDomain: "twitter-fe2e1.firebaseapp.com",
  projectId: "twitter-fe2e1",
  storageBucket: "twitter-fe2e1.appspot.com",
  messagingSenderId: "246712277624",
  appId: "1:246712277624:web:51920c993558af59ddeb8d",
  measurementId: "G-0T8KRN9MS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;