// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgQoVC7bQiUznsNjP7ZVyEl53DL6PVTcE",
    authDomain: "ezshopping-28321.firebaseapp.com",
    projectId: "ezshopping-28321",
    storageBucket: "ezshopping-28321.appspot.com",
    messagingSenderId: "174830606131",
    appId: "1:174830606131:web:af41d827b975340eafd046",
    measurementId: "G-2WGRL5CWBZ"
  };

  const firebaseapp = initializeApp(firebaseConfig)

  
  const auth = getAuth(firebaseapp);

  export { auth };
