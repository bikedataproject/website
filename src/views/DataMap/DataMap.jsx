import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './DataMap.module.css';
import Footer from '../../components/Footer/Footer';
import i18n from "../../utils/i18n";

import './data.css';

const DataMap = () => {

  const mapContainerRef = useRef(null);
  const mapOverlayRef = useRef(null);

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'https://api.maptiler.com/maps/7e7e2443-1c41-46d0-813c-f6b11c2c0225/style.json?key=2Piy1GKXoXq0rHzzBVDA',
      center: [4.3525, 50.8454],
      zoom: 10,
      hash: true,
    });

    map.addControl(new mapboxgl.NavigationControl());

    let overlay = mapOverlayRef.current;
    let lastLocation = undefined;    

    function updateOverlay(feature) {
      mapOverlayRef.current.innerHTML = '';

      const container = document.createElement('div');
      container.classList.add("wrapper");

      const title = document.createElement('h4');
      title.classList.add('data__subtitle');
      title.textContent = feature.properties.name;

      const dataWrapper = document.createElement('section');
      dataWrapper.classList.add('data__wrapper');

      const distance = Math.round(feature.properties.meters / 1000)

      const avarageDistance = Math.round(((feature.properties.meters /1000) / feature.properties.count), 4);
      const avarageSpeed = Math.round(((feature.properties.meters / 1000) / (feature.properties.seconds /3600)) ,2);
      const avarageDuration = Math.round((feature.properties.seconds / 60) / feature.properties.count, 2);

      const co2perkm = 130 / 1000;
      const co2 = Math.round((feature.properties.meters / 1000) * co2perkm) / 1000;

      if (!feature.properties.count) {
        dataWrapper.innerHTML = `
          <div class="data__empty">
            <p>No data collected yet. Get cycling & share your data 🚴</p>
          </div>`;
      } else {
        dataWrapper.innerHTML = `
           <div class="data__set">
             <span class="data__number">${feature.properties.count}</span>
             <p class="data__label">${i18n.t('Rides_collected')}</p>
           </div>
           <div class="data__set">
             <span class="data__number">${distance} km</span>
             <p class="data__label">${i18n.t('Distance_collected')}</p>
           </div>
           <div class="data__set">
             <span class="data__number">${avarageDistance} km</span>
             <p class="data__label">${i18n.t('Average_distance')}</p>
           </div>
           <div class="data__set">
             <span class="data__number">${avarageSpeed} km/h</span>
             <p class="data__label">${i18n.t('Average_speed')}</p>
           </div>
           <div class="data__set">
             <span class="data__number">${avarageDuration} min</span>
             <p class="data__label">${i18n.t('Average_duration')}</p>
           </div>
           <div class="data__set">
             <span class="data__number">${co2} t</span>
             <p class="data__label">${i18n.t('co2_saved')}</p>
           </div>
          `;
      }
      

      overlay.appendChild(container);
      container.appendChild(title);
      container.appendChild(dataWrapper);
      overlay.style.display = 'block';
    }

    map.on('load', function () {
      // get lowest label and road.
      let style = map.getStyle();
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
          'https://api.bikedataproject.info/statistics/tiles/mvt-prod.json ',
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
      }, lowestLabel);
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

        lastLocation = e.point;
        var feature = e.features[0];

        updateOverlay(feature);

        map.setFilter('areas-stats-selected', [
          'in',
          'id',
          feature.properties.id,
        ]);
      });
 
      map.on('mouseleave', 'areas-stats', function () {
        map.getCanvas().style.cursor = '';
        map.setFilter('areas-stats-selected', ['in', 'id', '']);
        overlay.style.display = 'none';
        lastLocation = undefined;
      });

      map.on('zoomend', function() {
        if (lastLocation) {
          var statsArea = map.queryRenderedFeatures(lastLocation, {
            layers: [ "areas-stats" ]
          });
          
          if (statsArea && statsArea.length > 0) {
            updateOverlay(statsArea[0]);

            map.setFilter('areas-stats-selected', [
              'in',
              'id',
              statsArea[0].properties.id,
            ]);
          }
        }
      });

      map.on('data', function(e) {
          if (lastLocation) {
            var statsArea = map.queryRenderedFeatures(lastLocation, {
              layers: [ "areas-stats" ]
            });
            
            if (statsArea && statsArea.length > 0) {
              updateOverlay(statsArea[0]);

              map.setFilter('areas-stats-selected', [
                'in',
                'id',
                statsArea[0].properties.id,
              ]);
            }
          }
      });
    });
  }, []);

  return (
    <>
      <section className={`${style.header} ${style.grid} ${style.content}`}>
        <p className={style.bigLetter}>{i18n.t('Data')}</p>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Map_title')}</h1>
          <p>{i18n.t('Data_content_one')}</p>
          <p>{i18n.t('Data_content_two')}</p>
          <p>{i18n.t('Data_content_three')}</p>
          <ul>
            <li>{i18n.t('Data_content_listOne')}</li>
            <li>{i18n.t('Data_content_listTwo')}</li>
            <li>{i18n.t('Data_content_listThree')}</li>
            <li>{i18n.t('Data_content_listFour')}</li>
          </ul>
          <p>{i18n.t('Data_content_four')}</p>
          
        </div>
      </section>

      <section>
        <div className={style.mapContainer} ref={mapContainerRef} />
        <div className={style.mapOverlay} ref={mapOverlayRef} />
      </section>

      <section className={`${style.cta} ${style.grid} ${style.content}`}>
        <div className={style.cta__wrapper}>
          <h3 className={style.subtitle}>{i18n.t('Map_subtitle')}</h3>

          <a className={style.btn} href="https://github.com/bikedataproject">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.15983 0 0 7.26871 0 16.2433C0 23.877 5.15949 30.2125 12.1205 31.9986C12.0402 31.7954 12.0007 31.5106 12.0007 31.2272V28.4652H10.0003C8.92051 28.4652 7.91966 27.9786 7.47983 27.0842C6.95966 26.1096 6.87932 24.6069 5.55983 23.6724C5.15949 23.3475 5.47949 23.0226 5.91932 23.0627C6.75949 23.306 7.43898 23.8756 8.07898 24.7271C8.71898 25.5801 8.99949 25.7833 10.1991 25.7833C10.7588 25.7833 11.6385 25.7432 12.4391 25.6202C12.879 24.4825 13.6388 23.4678 14.5593 22.9812C9.19966 22.3314 6.63966 19.6509 6.63966 15.9959C6.63966 14.4116 7.31915 12.9089 8.43983 11.6095C8.08034 10.3501 7.59966 7.75117 8.60051 6.73648C11.0012 6.73648 12.4405 8.32072 12.8 8.72576C13.9997 8.31934 15.3205 8.07603 16.6795 8.07603C18.0793 8.07603 19.3593 8.31934 20.559 8.72576C20.9185 8.31934 22.3591 6.73648 24.7585 6.73648C25.7185 7.71108 25.2786 10.3501 24.8783 11.6095C25.999 12.8688 26.639 14.4116 26.639 15.9959C26.639 19.6509 24.1185 22.3314 18.7997 22.8996C20.2798 23.671 21.3202 25.8635 21.3202 27.4878V31.1871C21.3202 31.3088 21.2807 31.4304 21.2807 31.5521C27.52 29.3596 32 23.3503 32 16.2433C32 7.26871 24.8402 0 16 0Z"
                fill="white"
              />
            </svg>
            Github
          </a>
        </div>
      </section>
    </>
  );
};

export default DataMap;
