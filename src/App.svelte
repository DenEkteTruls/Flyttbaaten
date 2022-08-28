<script>
	import router from 'page';
	import AuthHandler from "./firebase/AuthHandler.svelte";
	import { initializeApp } from "firebase/app";
	import { getAuth } from "firebase/auth";
	import { getDatabase, onValue, ref } from "firebase/database";

	import Home from "./Home.svelte";
	import Navbar from "./Navbar.svelte";

	const firebaseConfig = {
  		apiKey: "AIzaSyDRy1UimnYQKqB8n8qrU8jv9SBtXR2ng1I",
  		authDomain: "flyttbaaten.firebaseapp.com",
		databaseURL: "https://flyttbaaten-default-rtdb.europe-west1.firebasedatabase.app",
  		projectId: "flyttbaaten",
  		storageBucket: "flyttbaaten.appspot.com",
  		messagingSenderId: "232843748793",
  		appId: "1:232843748793:web:74eab7ed42852cd1178268",
  		measurementId: "G-YES36DF7NR"
	};

	const app = initializeApp(firebaseConfig);

	const database = getDatabase(app);
	const auth = getAuth(app);

	console.log("called");

	let page = Home;

	router("/", () => page = Home);

	router.start();
</script>

<AuthHandler {auth}/>
<svelte:component this={Navbar}/>
<svelte:component this={page} {database}/>