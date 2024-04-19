// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as config from "../firebase_config.json";
import { getAuth } from "firebase/auth";

const FirebaseApp = initializeApp(config);
const FirebaseStorage = getStorage(FirebaseApp);
const FireStore = getFirestore(FirebaseApp);
const FireBaseAuth = getAuth(FirebaseApp);

export { FirebaseApp, FirebaseStorage, FireStore, FireBaseAuth };
