<script lang="ts">
import { Button, Modal, Row, Container, Col } from "sveltestrap";
import type { IMessageHook } from "./IMessageHook";
import { MessageManager } from "./MessageManager";

let manager = new MessageManager();
let message: string = "";
export const hook: IMessageHook = manager;

let isOpen = false;
manager.on("hide", () => (isOpen = false));
manager.on("show", (m) => {
  message = m;
  isOpen = true;
});

const link = async () => {
  isOpen = false;
};
</script>

<Modal body isOpen="{isOpen}" header="Thanks for sharing your data!">
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
