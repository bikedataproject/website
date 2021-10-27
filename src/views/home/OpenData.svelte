<script>
import { Col, Row } from "sveltestrap";
</script>

<section>
  <div class="container">
    <Row>
      <Col xs="6">
        <div class="text-box">
          <h2>Who's the data for?</h2>
          <div>
            <p>
              People who work in departments of transportation and city planners
              around the world need data like this to help them develop modern
              infrastructure and sustainable cities. Some of them are aware and
              others we have to convince. And the more data we can provide, the
              greater impact we shall have.
            </p>
            <p>
              The data can also be very useful for other bike related products
              and services. The common goal is aggregating cycling data and make
              it available as open data in order to make cities better adapted
              to cyclists. For us and the people to come.
            </p>
          </div>
        </div>
      </Col>
      <Col xs="6">
        <p class="background-big-letter">Share</p>
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
