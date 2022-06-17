import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcCiEFCt_0RkP_LvxE-qiRa0MTk3jbqJw",
  authDomain: "libreriareact.firebaseapp.com",
  projectId: "libreriareact",
  storageBucket: "libreriareact.appspot.com",
  messagingSenderId: "523892270088",
  appId: "1:523892270088:web:8c967447b917c7b5a8ddbd",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
