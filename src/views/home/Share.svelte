<script lang="ts">
import { Container, Row, Col, Input, Label, Button } from "sveltestrap";
import Gpx from "../../integrations/Gpx.svelte";
import Message from "../../components/modals/Message.svelte";
import type { IMessageHook } from "../../components/modals/IMessageHook";
import Fitbit from "../../integrations/Fitbit.svelte";

export let fitbit: {
  isCallback: boolean,
  isConfirmEmail: boolean
};

let messageHook: IMessageHook;
</script>

<Message bind:hook={messageHook} />

<section id="share-section">
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
                <Fitbit isCallback={fitbit.isCallback} isConfirmEmail={fitbit.isConfirmEmail}/>
              </div>
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
