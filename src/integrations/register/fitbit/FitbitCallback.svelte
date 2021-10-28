<script lang="ts">
import { useLocation, useNavigate } from "svelte-navigator";
import queryString from "query-string";
import Message from "../../Message.svelte";
import { IdentityApi } from "../../../apis/identity/IdentityApi";
const navigate = useNavigate();

let identityApi = new IdentityApi({
  url: "http://localhost:5001"
});
let message: string;
let messageOpen: boolean = false;
let completeRegistration = async () => {
  const parsed = queryString.parse(window.location.search);
  if (!parsed.code) {
    throw Error("callback without code");
  }

  const ok = await identityApi.fitbit.registerCallback(parsed.code as string);
  if (ok) {
    message = "Your fitbit account was successfully linked, thank you!";
  } else {
    message = "Something went wrong while linking your fitbit account, please try again or get in touch with us!";
  }
  messageOpen = true;
};

let close = async () => {
    navigate("/");
}
</script>

{#if messageOpen}
  <Message on:close={close} message="{message}" />
{/if}

{#await completeRegistration()}
  <div></div>
{/await}
