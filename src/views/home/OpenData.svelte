<script>
import { Col, Row } from "sveltestrap";
import { _ } from "svelte-i18n";
</script>

<section>
  <div class="container">
    <Row>
      <Col xs="6">
        <div class="text-box">
          <h2>{$_("Contribute_title")}</h2>
          <div>
            <p>
              {$_("People_who_work")}
            </p>
            <p>
              {$_("Common_goal")}
            </p>
          </div>
        </div>
      </Col>
      <Col xs="6">
        <p class="background-big-letter">{$_("Contribute_big")}</p>
        <img
          class="illustration"
          src="/img/contribute.png"
          alt="People cycling" />
      </Col>
    </Row>
  </div>
</section>

<style>
.text-box {
  background-color: #ebedf5;
  color: #36469d;
  padding: 5rem 4rem 5rem 5rem;
  margin-left: -10rem;
}

.illustration {
  margin-left: -100px;
  z-index: -1;
  position: relative;
  margin-top: 130px;
}

section {
    margin-bottom: 200px;
}
</style>
