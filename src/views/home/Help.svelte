<script>
import { Col, Container, Row } from "sveltestrap";
import { _ } from "svelte-i18n";
</script>

<section>
  <p class="background-big-letter">{$_("Help")}</p>
  <Container class="container container-section">
    <Row>
      <Col xs="6">
        <h2>{$_("Help_title")}</h2>
        <div class="content">
          <p class="fw-bold">
            {$_("Ask_for_favor")}
          </p>
          <p>
            {$_("By_sharing_your")}
          </p>
          <p>
            {$_("Every_cyclist_can")}
          </p>
        </div>
      </Col>
      <Col xs="6">
        <picture class="Home_content__img__225R5"
          ><img
            class="Home_content__img__225R5"
            src="/img/mockup-big.png"
            alt="Mock up of the app on a phone"
            width="468"
            height="593" /></picture>
      </Col>
    </Row>
  </Container>
</section>
