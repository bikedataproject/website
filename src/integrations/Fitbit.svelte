<script lang="ts">
import {
  Button,
  Modal,
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Col,
} from "sveltestrap";
import { IdentityApi } from "../apis/identity/IdentityApi";
import type { IMessageHook } from "../components/modals/IMessageHook";
import Message from "../components/modals/Message.svelte";
import queryString from "query-string";

export let isCallback: boolean = false;
export let isConfirmEmail: boolean = false;
let messageHook: IMessageHook;
let identityApi: IdentityApi = new IdentityApi({
  url: "http://localhost:5001",
});
let email: string;
let registerOpen: boolean = false;

let open = async () => {
  registerOpen = true;
};
let register = async () => {
  const registerResponse = await identityApi.fitbit.register({
    redirectUrl: "http://localhost:5000/fitbit/callback",
    confirmEmailUrl: "http://localhost:5000/fitbit/confirmemail",
    email: email,
  });

  // check if there is a response.
  console.log(registerResponse);
  if (typeof registerResponse === "undefined") {
    messageHook.show(
      "Our apologies, linking your fitbit account failed, please try again later."
    );
    return;
  }

  // 2 responses possible:
  // 1: email sent to authorize.
  // 2: redirect to authorize endpoint received.
  if (registerResponse.emailSent) {
    // if the email is sent, tell the user.
    messageHook.show(
      "Thank you for sharing, we've sent you an email to confirm."
    );
    return;
  } else {
    window.location.href = registerResponse.url;
    return;
  }
};
let callback = async () => {
  const parsed = queryString.parse(window.location.search);
  if (!parsed.code) {
    throw Error("callback without code");
  }

  const ok = await identityApi.fitbit.registerCallback(parsed.code as string);
  if (ok) {
    messageHook.show("Your fitbit account was successfully linked, thank you!");
  } else {
    messageHook.show(
      "Something went wrong while linking your fitbit account, please try again or get in touch with us!"
    );
  }
};
let confirmEmail = async () => {
  const parsed = queryString.parse(window.location.search);
  if (!parsed.email) {
    throw Error("callback without code");
  }
  if (!parsed.token) {
    throw Error("callback without token");
  }

  // confirm email, this also logs in the user.
  const emailResult = await identityApi.confirmEmail(
    parsed.email as string,
    parsed.token as string
  );
  if (!emailResult) {
    messageHook.show(
      "Our apologies, we could not confirm your email, the link is probably expired. Try connecting your account again."
    );
    return;
  }

  // call register again, this time the user is logged in.
  // this should return the authorize link only.
  const registerResponse = await identityApi.fitbit.register({
    redirectUrl: "http://localhost:5000/fitbit/callback",
    confirmEmailUrl: "http://localhost:5000/fitbit/confirmemail",
  });

  // check if there is a response.
  if (typeof registerResponse === "undefined") {
    messageHook.show(
      "Our apologies, linking your fitbit account failed, please try again later."
    );
    return;
  }

  // the response should be a url to redirect.
  if (registerResponse.emailSent) {
    // oeps, this is wrong!
    throw Error("this should not happen, user is logged in here");
    return;
  } else {
    window.location.href = registerResponse.url;
    return;
  }
};
</script>

{#if isCallback}
  {#await callback()}
    <div></div>
  {/await}
{/if}

{#if isConfirmEmail}
  {#await confirmEmail()}
    <div></div>
  {/await}
{/if}

<Message bind:hook="{messageHook}" />

<Button class="btn-share w-100" on:click="{async () => await open()}"
  >Fitbit</Button>

{#if registerOpen}
  <Modal
    body
    isOpen="{registerOpen}"
    toggle="{async () => {
      registerOpen = false;
    }}"
    header="Connect your Fitbit account!">
    <Container>
      <Row class="sharing-illustration w-100">
        <div class="sharing-large-logo">
          <img src="/img/providers/fitbit-logo.svg" alt="Fitbit logo" />
        </div>
        <div class="sharing-arrow">
          <img src="/img/arrow.svg" alt="Arrow" />
        </div>
        <div class="sharing-large-logo">
          <div class="sharing-logo">
            <img src="/img/logo-large.avif" alt="Bike data project" />
          </div>
        </div>
      </Row>
      <Row class="w-100">
        <p>
          When connecting your Fitbit account <strong
            >any cycling trips you do with your Fitbit device get shared
            automatically</strong> with BikeDataProject.
        </p>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            bind:value="{email}" />
        </FormGroup>
        <p>
          Your connection with BikeDataProject won't last forever, if you share
          your email address we will notify you when your connection to the
          BikeDataProject is broken.
        </p>
      </Row>
      <Row class="w-100">
        <Col xs="6">
          <Button
            color="primary"
            on:click="{async () => {
              registerOpen = false;
              await register();
            }}">Connect my Fitbit account</Button>
        </Col>
      </Row>
    </Container>
  </Modal>
{/if}
