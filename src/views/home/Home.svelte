<script lang="ts">
import Data from "./Data.svelte";
import Head from "./Head.svelte";
import Help from "./Help.svelte";
import Newsletter from "./Newsletter.svelte";
import OpenData from "./OpenData.svelte";
import Partners from "./Partners.svelte";
import Power from "./Power.svelte";
import Share from "./Share.svelte";

export let fitbitCallbackOpen = false;
export let FitbitConfirmEmailOpen = false;
</script>

<Head />

<Help />

<Share {fitbitCallbackOpen} {FitbitConfirmEmailOpen} />

<Data />

<OpenData />

<Power />

<Newsletter />

<Partners />