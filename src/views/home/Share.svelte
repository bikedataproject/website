<script lang="ts">
import { Container, Row, Col, Input, Label, Button } from "sveltestrap";
import Gpx from "../../integrations/Gpx.svelte";
import Message from "../../components/modals/Message.svelte";
import type { IMessageHook } from "../../components/modals/IMessageHook";
import Fitbit from "../../integrations/Fitbit.svelte";
import { _ } from "svelte-i18n";
import Strava from "../../integrations/Strava.svelte";

export let fitbit: {
  isCallback: boolean;
  isConfirmEmail: boolean;
};

let messageHook: IMessageHook;
</script>

<Message bind:hook="{messageHook}" />

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
            <h4>{$_("Connect_existing_account")}</h4>
            <div class="mt-1 mb-3">
              <div class="mb-1">
                <Strava />
              </div>
              <div class="mb-1">
                <Fitbit
                  isCallback="{fitbit.isCallback}"
                  isConfirmEmail="{fitbit.isConfirmEmail}" />
              </div>
            </div>
            <p><strong>{$_("Connect_account_explain")}</strong></p>
          </Col>
          <Col xs="6">
            <h4>Upload your data</h4>
            <div class="mt-1 mb-3">
              <div class="mb-1"><Gpx /></div>
            </div>
            <p><strong>{$_("Connect_gpx_explain")}</strong></p>
          </Col>
        </Row>
      </Col>
      <Col xs="6">
        <p class="background-big-letter">{$_("Contribute_big")}</p>
        <h2>{$_("Donate_title")}</h2>
        <p>
          {$_("Several_ways_to_contribute")}
        </p>
        <p>
          {$_("You_not_using")}
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
