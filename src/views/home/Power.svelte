<script>
import { Container, Row, Col } from "sveltestrap";
import { _ } from "svelte-i18n";
</script>

<section>
  <p class="background-big-letter">{$_("Power")}</p>
  <Container>
    <Row>
      <Col xs="8">
        <h2>{$_("Visible_title")}</h2>
        <div>
          <p>
            {$_("Community_more_visible")}
          </p>
          <p>
            {$_("Globally_but_locally")}
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>
<img
  class="illustration"
  src="/img/route.svg"
  alt="Striped line of a route with places marked on" />

<style>
.illustration {
  position: absolute;
  right: 0;
  transform: translateY(-35rem);
  width: 30%;
}
</style>
