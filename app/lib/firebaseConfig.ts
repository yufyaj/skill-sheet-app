import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChx5UElOHreJFoTE8Fham8aJJCCeNKnPA",
  authDomain: "skill-sheet-app.firebaseapp.com",
  projectId: "skill-sheet-app",
  storageBucket: "skill-sheet-app.appspot.com",
  messagingSenderId: "954611946935",
  appId: "1:954611946935:web:60081ac6669ec43f94c432",
  measurementId: "G-YJ6SEE3KT9",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
export { auth };
