import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './DataMap.module.css';
import i18n from 'i18next';

const DataMap = () => {

  const mapContainerRef = useRef(null);
  const mapOverlayRef = useRef(null);

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'https://api.maptiler.com/maps/7e7e2443-1c41-46d0-813c-f6b11c2c0225/style.json?key=2Piy1GKXoXq0rHzzBVDA',
      center: [4.3525, 50.8454],
      zoom: 14,
      hash: true,
    });

    map.addControl(new mapboxgl.NavigationControl());

    let overlay = mapOverlayRef.current;
    const popup = new mapboxgl.Popup({
      closeButton: false,
    });

    map.on('load', function () {
      // get lowest label and road.
      const style = map.getStyle();
      let lowestRoad = undefined;
      let lowestLabel = undefined;
      let lowestSymbol = undefined;
      for (var l = 0; l < style.layers.length; l++) {
        var layer = style.layers[l];
        if (layer && layer['source-layer'] === 'transportation') {
          if (!lowestRoad) {
            lowestRoad = layer.id;
          }
        }
        if (layer && layer['source-layer'] === 'transportation_name') {
          if (!lowestLabel) {
            lowestLabel = layer.id;
          }
        }
        if (layer && layer.type == 'symbol') {
          if (!lowestSymbol) {
            lowestSymbol = layer.id;
          }
        }
      }

      map.addSource('areas', {
        type: 'vector',
        url:
          'https://bikedataproject.github.io/heatmap-experiment/areas/mvt.json',
        //url: 'http://localhost:8081/areas/mvt-local.json'
      });

      map.addLayer({
        id: 'areas-stats',
        type: 'fill',
        source: 'areas',
        'source-layer': 'areas',
        paint: {
          'fill-color': '#EF4823',
          'fill-opacity': 0.1,
        },
      });

      map.addLayer({
        id: 'areas-stats-boundaries',
        type: 'line',
        source: 'areas',
        'source-layer': 'areas',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#EF4823',
          'line-width': 1,
        },
      });
      map.addLayer(
        {
          id: 'areas-stats-selected',
          type: 'fill',
          source: 'areas',
          'source-layer': 'areas',
          paint: {
            'fill-outline-color': '#36469D',
            'fill-color': '#36469D',
            'fill-opacity': 0.75,
          },
          filter: ['in', 'id', ''],
        },
        'areas-stats-boundaries'
      );

      map.on('mousemove', 'areas-stats', function (e) {
        map.getCanvas().style.cursor = 'pointer';

        var feature = e.features[0];
        //console.log(feature);

        //overlay.innerHTML = '';
        mapOverlayRef.current.innerHTML = '';

        var title = document.createElement('strong');
        title.textContent = feature.properties.name;

        var population = document.createElement('div');
        population.textContent =
          'Total KMs: ' +
          feature.properties.km +
          ' ' +
          'Total Time: ' +
          feature.properties.seconds +
          ' ' +
          'Total Trips: ' +
          feature.properties.count;

        overlay.appendChild(title);
        overlay.appendChild(population);
        overlay.style.display = 'block';

        map.setFilter('areas-stats-selected', [
          'in',
          'id',
          feature.properties.id,
        ]);

        popup.setLngLat(e.lngLat).setText(feature.properties.name).addTo(map);
      });

      map.on('mouseleave', 'areas-stats', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
        map.setFilter('areas-stats-selected', ['in', 'id', '']);
        overlay.style.display = 'none';
      });
    });
  }, []);

  return (
    <>
      <section className={`${style.header} ${style.grid} ${style.content}`}>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Map_title')}</h1>
          <p>
            This data has been gathered during the past years, by different
            types of cyclists. Feel free to explore the map!
          </p>
          <p>Below, you can have full access to our open data as well.</p>
        </div>
      </section>

      <section>
        <div className={style.mapContainer} ref={mapContainerRef} />
        <div className={style.mapOverlay} ref={mapOverlayRef} />
      </section>
    </>
  );
};

export default DataMap;
