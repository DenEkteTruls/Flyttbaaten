import { auth } from './firebase_main';
import { signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function checkAuth()
{
    onAuthStateChanged(auth, (user) => {
       if (user) {
            console.log("signed in");
        } else {    
            console.log("not signed in ...");
        }
    });
}