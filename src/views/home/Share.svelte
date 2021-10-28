<script lang="ts">
import { useLocation, useNavigate } from "svelte-navigator";
import { Container, Row, Col, Input, Label } from "sveltestrap";
import { IdentityApi } from "../../apis/identity/IdentityApi";
import Gpx from "../../integrations/Gpx.svelte";
import Message from "../../integrations/Message.svelte";
import Fitbit from "../../integrations/register/fitbit/Fitbit.svelte";
import FitbitCallback from "../../integrations/register/fitbit/FitbitCallback.svelte";
import FitbitConfirmEmail from "../../integrations/register/fitbit/FitbitConfirmEmail.svelte";
import Strava from "../../integrations/register/Strava.svelte";
const navigate = useNavigate();

export let fitbitCallbackOpen = false;
export let FitbitConfirmEmailOpen = false;

let identityApi = new IdentityApi({
  url: "http://localhost:5001",
});

let messageOpen: boolean = false;
let message = "";
let messageClose = () => {
  messageOpen = false;
};

let fitbitSubmit = async (email: string) => {
  const registerResponse = await identityApi.fitbit.register({
    redirectUrl: "http://localhost:5000/fitbit/callback",
    confirmEmailUrl: "http://localhost:5000/fitbit/confirmemail",
    email: email,
  });

  // check if there is a response.
  if (typeof registerResponse === "undefined") {
    message = "Our apologies, linking your fitbit account failed, please try again later.";
    messageOpen = true;
    return;
  }

  // 2 responses possible:
  // 1: email sent to authorize.
  // 2: redirect to authorize endpoint received.
  if (registerResponse.emailSent) {
    // if the email is sent, tell the user.
    message = "Thank you for sharing, we've sent you an email to confirm.";
    messageOpen = true;
    return;
  } else {
    navigate(registerResponse.url);
    return;
  }
};
</script>

{#if messageOpen}
  <Message on:close="{messageClose}" message="{message}" />
{/if}

{#if fitbitCallbackOpen}
  <FitbitCallback />
{/if}

{#if FitbitConfirmEmailOpen}
  <FitbitConfirmEmail />
{/if}

<section>
  <img
    class="illustration"
    src="/img/bike_illustration.svg"
    alt="Line illustration of a bike and some trees." />
  <Container>
    <Row>
      <Col class="mt-5" xs="6">
        <Row>
          <Col xs="6">
            <h4>Connect your account</h4>
            <div class="mt-1 mb-3">
              <div class="mb-1">
                <Fitbit
                  on:submit="{async (e) => await fitbitSubmit(e.detail)}" />
              </div>
              <div class="mb-1"><Strava /></div>
            </div>
            <p>
              After connecting your account your data will be automatically
              shared with us. You can revoke our access at any time.
            </p>
          </Col>
          <Col xs="6">
            <h4>Upload your data</h4>
            <div class="mt-1 mb-3">
              <div class="mb-1"><Gpx /></div>
            </div>
            <p>Have GPX tracks of your cycling trips, upload them here!</p>
          </Col>
        </Row>
      </Col>
      <Col xs="6">
        <p class="background-big-letter">Share</p>
        <h2>Share your bike data</h2>
        <p>
          There are a several ways you can contribute to the Bike Data Project.
          For now, you can either connect your Strava account or upload your
          Garmin files. Once your app is connected you can just carry on as
          usual and your rides will be automatically uploaded to the Bike Data
          Project platform.
        </p>
        <p>
          What if you aren't using any of the listed apps yet? You will be able
          to download and use the Bike Data Project app soon. Moreover, we're
          also working on the integration of other cycling apps!
        </p>
      </Col>
    </Row>
  </Container>
</section>

<style>
h4 {
  height: 100px;
}
</style>
