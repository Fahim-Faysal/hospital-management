import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.congig";

const initilizeAuthentication = () => {
      initializeApp(firebaseConfig);
}
export default initilizeAuthentication;
