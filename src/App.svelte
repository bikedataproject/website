<script lang="ts">
import { Router, Route } from "svelte-navigator";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import About from "./views/about/About.svelte";
import Faq from "./views/faq/Faq.svelte";
import Data from "./views/datamap/Data.svelte";
import Home from "./views/home/Home.svelte";
import { appManager } from "./AppManagerStore";
import { register, init, getLocaleFromNavigator, isLoading } from "svelte-i18n";

const publicUrl = new URL("process.env.BASEURL");
$appManager.PublicUrl = publicUrl.href;

register("en", () => import("./locales/en.json"));
register("fr", () => import("./locales/fr.json"));
register("nl", () => import("./locales/nl.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
</script>
{#if $isLoading}
  Please wait...
{:else}
<Router>
  <Header />
  <Route path="/">
    <Home />
  </Route>

  <Route path="faq">
    <Faq />
  </Route>

  <Route path="about">
    <About />
  </Route>

  <Route path="datamap">
    <Data />
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
{/if}