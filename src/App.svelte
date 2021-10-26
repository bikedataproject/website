<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Header from "./components/Header.svelte";
	import Register from "./views/accounts/Register.svelte";
	import Home from "./views/home/Home.svelte";
</script>


<Router>
	<Header />
	<Route path="/">
		<Home />
	</Route>
	
	<Route path="register">
		<Register />
	</Route>
</Router>

<style>

</style>
