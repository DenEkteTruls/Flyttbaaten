<script>
	import router from 'page';
	import './firebase/firebase_main';
	import { checkAuth } from './firebase/authHandler';
	import { getBoatImage } from './firebase/storeHandler';

	import Home from "./Home.svelte";
	// import Navbar from "./Navbar.svelte";
	import Login from './Login.svelte';
	import Profile from './Profile.svelte';

	checkAuth();
	getBoatImage()

	let page = Home;

	router("/", () => page = Home);
	router("/login", () => page = Login);
	router("/profile", () => page = Profile);

	router.start();
</script>

<!-- <svelte:component this={Navbar}/> -->
<svelte:component this={page}/>