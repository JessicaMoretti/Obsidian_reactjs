import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBUVdwZy0ceM61EdydbYf5PBSq0kwi8GfQ",
  
    authDomain: "obsidian-jessicamoretti.firebaseapp.com",
  
    projectId: "obsidian-jessicamoretti",
  
    storageBucket: "obsidian-jessicamoretti.appspot.com",
  
    messagingSenderId: "901128529281",
  
    appId: "1:901128529281:web:a43e6fb345e59535807480"
  
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);