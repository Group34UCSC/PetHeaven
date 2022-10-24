import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJrgK3vniPLVkKm3OUyWY9DakMCCLiIOc",
    authDomain: "petheaven-84307.firebaseapp.com",
    projectId: "petheaven-84307",
    storageBucket: "petheaven-84307.appspot.com",
    messagingSenderId: "469044740317",
    appId: "1:469044740317:web:9c3afac467d9413d7ddb34",
    measurementId: "G-SQ6RXHWSL8"
  };
  
//   firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

