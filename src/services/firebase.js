import { initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getDatabase } from 'firebase/database';

const {
  REACT_APP_FB_API_KEY: apiKey,
  REACT_APP_FB_AUTH_DOMAIN: authDomain,
  REACT_APP_FB_DB_URL: databaseURL,
  REACT_APP_FB_PROJ_ID: projectId,
  REACT_APP_FB_STORAGE: storageBucket,
  REACT_APP_FB_SENDER_ID: messagingSenderId,
  REACT_APP_FB_APP_ID: appId,
} = process.env;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};


const firebase = initializeApp(config);
const firestore = getFirestore(firebase);
const auth = getAuth(firebase);
const storage = getStorage(firebase);
const database = getDatabase(firebase);


export { 
  firestore,
  auth, 
  storage, 
  database,
};
export default firebase;