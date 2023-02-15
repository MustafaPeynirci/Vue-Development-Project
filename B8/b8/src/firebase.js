// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD_5mzoqLiHUTOje9TrRuoHcg_Gnq1eZ0",
  authDomain: "fir-vue-app-45579.firebaseapp.com",
  projectId: "fir-vue-app-45579",
  storageBucket: "fir-vue-app-45579.appspot.com",
  messagingSenderId: "221315694975",
  appId: "1:221315694975:web:1ee9835586ac872db9da4a",
  measurementId: "G-KGH39RS9W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);