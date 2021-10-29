<script>
import { Container, Row, Col } from "sveltestrap";
import { _ } from "svelte-i18n";
</script>

<section class="my-5">
  <p class="background-big-letter">{$_("Partners")}</p>
  <Container>
    <Row>
      <h2>{$_("Partners_title")}</h2>
      <Col xs="3" class="mt-3">
        <a
          href="https://be.okfn.org/"
          target="_blank"
          class="partner-card"
          rel="noopener noreferrer">
          <img
            src="/img/partners/open-knowledge-belgium.svg"
            alt="Logo of Open Knowlegde Belgium" />
        </a>
      </Col>
      <Col xs="3" class="mt-3">
        <a
          href="https://www.wgfilm.com/"
          class="partner-card"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/img/partners/wg-film.png" alt="Logo of WG Film" />
        </a>
      </Col>
      <Col xs="3" class="mt-3">
        <a
          href="https://mobilite-mobiliteit.brussels"
          class="partner-card"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="/img/partners/brussels-mobility.png"
            alt="Logo of brussels mobility" />
        </a>
      </Col>
      <Col xs="3" class="mt-3">
        <a
          href="https://bike.brussels/nl/"
          class="partner-card"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="/img/partners/bike-for-brussels.webp"
            alt="Logo of Bike Fore Brussels" />
        </a>
      </Col>
      <Col xs="3" class="mt-3">
        <a
          href="mailto:bikedataproject@openknowledge.be"
          class="partner-card"
          target="_blank"
          rel="noopener noreferrer">
          <h3>{$_("Partner_up")}</h3>
        </a>
      </Col>
    </Row>
  </Container>
  <div class="Home_content__wrapper__lZpMD">
    <div class="Home_partners__1dttM Home_grid__XUG6j components_grid__1VC05">
    </div>
  </div>
</section>

<style>
.partner-card {
  background: #fff;
  box-shadow: 0 2px 10px #e5e5e5;
  border-radius: 7px;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.partner-card h3 {
  color: #36469d;
  text-decoration: none;
  width: 60%;
  text-align: center;
  padding-top: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
}

img {
  max-height: 100%;
  max-width: 100%;
}
</style>
