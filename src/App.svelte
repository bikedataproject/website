<script lang="ts">
import { Router, Route } from "svelte-navigator";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import Faq from "./views/faq/Faq.svelte";
import Home from "./views/home/Home.svelte";
</script>

<Router>
  <Header />
  <Route path="/">
    <Home />
  </Route>

  <Route path="faq">
    <Faq />
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