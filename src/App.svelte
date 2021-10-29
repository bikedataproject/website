<script lang="ts">
import { Router, Route } from "svelte-navigator";
import Footer from "./components/Footer.svelte";
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

  <Route path="fitbit/callback">
    <Home fitbit={{
      isCallback: true,
      isConfirmEmail: false
    }} />
  </Route>
  <Route path="fitbit/confirmemail">
    <Home fitbit={{
      isCallback: false,
      isConfirmEmail: true
    }} />
  </Route>
  <Footer />
</Router>