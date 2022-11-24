// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCJOeBeDBpJPWMv7mp4AyamvxXxzNNjg_4",

  authDomain: "buy-sell-car-store-project.firebaseapp.com",

  projectId: "buy-sell-car-store-project",

  storageBucket: "buy-sell-car-store-project.appspot.com",

  messagingSenderId: "894658523369",

  appId: "1:894658523369:web:5319e2857fdbc933f90078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
