<script lang="ts">
import { Router, Route } from "svelte-navigator";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import FitbitCallback from "./integrations/register/fitbit/FitbitCallback.svelte";
import FitbitConfirmEmail from "./integrations/register/fitbit/FitbitConfirmEmail.svelte";
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
    <Home fitbitCallbackOpen={true} />
  </Route>
  <Route path="fitbit/confirmemail">
    <Home FitbitConfirmEmailOpen={true} />
  </Route>
  <Footer />
</Router>

<style>
</style>
