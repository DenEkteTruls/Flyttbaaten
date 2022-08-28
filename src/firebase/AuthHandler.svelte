<script>
    export let auth;
    import { signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("signed in");
        } else {
            console.log("not signed in ...");
        }
    });
</script>