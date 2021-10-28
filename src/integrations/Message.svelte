<script lang="ts">
import { Button, Modal, Row, Container, Col } from "sveltestrap";
import { createEventDispatcher } from "svelte";

export let message: string = "";

const close = createEventDispatcher();

const link = async () => {
  close("close");
};
</script>

<Modal body isOpen="{true}" header="Thanks for sharing your data!">
  <Container>
    <Row class="w-100">
      <p>
        {message}
      </p>
    </Row>
    <Row class="w-100">
      <Col xs="6">
        <Button color="primary" on:click="{async () => await link()}"
          >OK</Button>
      </Col>
    </Row>
  </Container>
</Modal>
