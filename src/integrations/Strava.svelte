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
</script>

<Button class="btn-share w-100 disabled" on:click="{async () => await open()}"
  >Strava</Button>
