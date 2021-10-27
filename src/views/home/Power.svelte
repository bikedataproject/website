<script>
import { Container, Row, Col } from "sveltestrap";
</script>

<section>
  <p class="background-big-letter">Power</p>
  <Container>
    <Row>
      <Col xs="8">
        <h2>More cycling data means more power to and for cyclists</h2>
        <div>
          <p>
            The Bike Data Project provides the opportunity to collect all
            cycling data from different applications into one platform, which is
            - based on the principle of open source and open data - adaptable
            and accessible by everyone to ensure it benefits society.
          </p>
          <p>
            Little is known about how cyclists move around in cities today. If
            there’s data available, it’s closed and restricted data sold by one
            single app provider or static data collected through manual counts.
            If we want to have more people cycling in cities and make the
            bicycle as easy and logical to opt for as the car, we also need to
            get the same data insights into cyclists’ behavior as we have about
            car transport.
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
