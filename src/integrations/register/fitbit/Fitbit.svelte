<script lang="ts">
import {
  Button,
  Modal,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
  Col,
} from "sveltestrap";
import { createEventDispatcher } from 'svelte';

const submit = createEventDispatcher();

let isOpen = false;
let email: string;
const toggle = () => (isOpen = !isOpen);
const link = async () => {
  isOpen = false;

  submit("submit", email);
};
</script>

<Button class="btn-share w-100" on:click="{toggle}">Fitbit</Button>
<Modal
  body
  isOpen="{isOpen}"
  toggle="{toggle}"
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
        When linking your Fitbit <strong
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
        Your link with Fitbit will not last forever, if you share your email
        address we will notify you when your link to the BikeDataProject is
        broken.
      </p>
    </Row>
    <Row class="w-100">
      <Col xs="6">
        <Button color="primary" on:click="{async () => await link()}"
          >Link my account.</Button>
      </Col>
    </Row>
  </Container>
</Modal>
