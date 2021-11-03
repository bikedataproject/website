<script>
import { Button } from "sveltestrap";
import { _ } from "svelte-i18n";
</script>

<section>
  <p class="background-big-letter">{$_("Data")}</p>
  <div class="container container-section">
    <h2>{$_("Data_title")}</h2>
    <div class="row mb-4">
      <div class="col-4 counter">
        <span class="counter-number">381.167</span>
        <span>{$_("Rides_collected")}</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">6.220</span>
          <span>K km</span>
        </span>
        <span>{$_("Distance_collected")}</span>
      </div>

      <div class="col-4 counter">
        <span class="counter">
          <span class="counter-number">16<span>km</span> </span>
          <span>{$_("Average_distance")}</span>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-4 counter">
        <span>
          <span class="counter-number">14</span>
          <span> km/h</span>
        </span>
        <span>{$_("Average_speed")}</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">68</span>
          <span> min</span>
        </span>
        <span>{$_("Average_duration")}</span>
      </div>
      <div class="col-4 counter">
        <span>
          <span class="counter-number">809</span>K
          <span> t</span>
        </span>
        <span>{$_("co2_saved")}</span>
      </div>
    </div>
    <div class="explore">
      <h3>{$_("Data_subtitle")}</h3>
      <Button class="btn-share mt-3">{$_("Data_button")}</Button>
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