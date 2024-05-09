import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK8wBLVAlRaJw4OpHotTGo7GSyYZsuyjg",
  authDomain: "app-login-6cc79.firebaseapp.com",
  projectId: "app-login-6cc79",
  storageBucket: "app-login-6cc79.appspot.com",
  messagingSenderId: "291473486658",
  appId: "1:291473486658:web:c27d51295af32fab3b8edb",
  measurementId: "G-3TSTJVZYKP"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);