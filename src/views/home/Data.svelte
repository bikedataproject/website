<script>
import { Button } from "sveltestrap";
</script>

<section>
  <p class="background-big-letter">Data</p>
  <div class="container container-section">
    <h2>Collected data worldwide</h2>
    <div class="row mb-4">
      <div class="col-4 counter">
        <span class="counter-number">381.167</span>
        <span>rides collected</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">6.220</span>
          <span>K km</span>
        </span>
        <span>distance collected</span>
      </div>

      <div class="col-4 counter">
        <span class="counter">
          <span class="counter-number">16<span>km</span> </span>
          <span>average distance</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-4 counter">
        <span>
          <span class="counter-number">14</span>
          <span> km/h</span>
        </span>
        <span>average speed</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">68</span>
          <span> min</span>
        </span>
        <span>average duration</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">809</span>K
          <span> t</span>
        </span>
        <span>CO2 saved</span>
      </div>
    </div>
    <div class="explore">
      <h3>Interested in the data by region?</h3>
      <Button class="btn-share mt-3">Explore the data</Button>
    </div>
  </div>
</section>

<style>
.counter-number {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 4.1rem;
}

.counter {
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-column: span 4;
}

.counter-number {
  color: #36469d;
}

.explore {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
}
</style>
