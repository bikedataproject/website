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
import { appManager } from "../AppManagerStore";

export let isCallback: boolean = false;
export let isConfirmEmail: boolean = false;
let messageHook: IMessageHook;
let identityApi: IdentityApi = new IdentityApi({
  url: `${$appManager.PublicUrl}api/identity`,
});
let email: string;
let registerOpen: boolean = false;

let open = async () => {
  registerOpen = true;
};
const redirectUrl = `${$appManager.PublicUrl}fitbit/callback`;
const confirmEmailUrl = `${$appManager.PublicUrl}fitbit/confirmemail`;
let buttonPush = async () => {
  if (email) {
    await register();
  } else {
    await authorize();
  }
};

let authorize = async () => {};

let register = async () => {
  const registerResponse = await identityApi.fitbit.register({
    confirmEmailUrl: confirmEmailUrl,
    email: email,
  });

  // show message if register failed.
  if (!registerResponse) {
    messageHook.show(
      "Our apologies, linking your fitbit account failed, please try again later."
    );
    return;
  }

  messageHook.show(
    "Thank you for sharing, we've sent you an email to confirm."
  );
};
let callback = async () => {
  const parsed = queryString.parse(window.location.search);
  if (!parsed.code) {
    throw Error("callback without code");
  }

  const ok = await identityApi.fitbit.callback(
    parsed.code as string,
    redirectUrl
  );
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

  // show message if email confirmation failed.
  if (!emailResult) {
    messageHook.show(
      "Our apologies, we could not confirm your email, the link is probably expired. Try connecting your account again."
    );
    return;
  }

  // call register again, this time the user is logged in.
  // this should return the authorize link only.
  const registerResponse = await identityApi.fitbit.authorize({
    redirectUrl: redirectUrl
  });

  // check if there is a response.
  if (typeof registerResponse === "undefined") {
    messageHook.show(
      "Our apologies, linking your fitbit account failed, please try again later."
    );
    return;
  }

  // the response should be a url to redirect.
  window.location.href = registerResponse.url;
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
              await buttonPush();
            }}">Connect my Fitbit account</Button>
        </Col>
      </Row>
    </Container>
  </Modal>
{/if}
