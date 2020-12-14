import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18n from "../../utils/i18n";
import style from './Home.module.css';
import { useObserver } from 'mobx-react-lite';
import CountUp from 'react-countup';
import Footer from '../../components/Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import { IoMdClose } from "react-icons/io";
import { MoonLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import { Element } from 'react-scroll';
 
const Home = () => {
  const [garminModalVisible, setGarminModalVisible] = useState(false);
  const [garminFiles, setGarminFiles] = useState({});
  const [garminFilesError, setGarminFilesError] = useState(<></>);
  const [garminFilesIsUploading, setGarminFilesIsUploading] = useState(false)

  const [modalContent, setModalContent] = useState(<></>);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [stravaSuccess, setStravaSuccess] = useState(false);
  const [stravaFailed, setStravaFailed] = useState(false);

  const [statisticsDuration, setStatisticsDuration] = useState(0);
  const [totalRides, setTotalRides] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [averageDuration, setAverageDuration] = useState(0);
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [averageDistance, setAverageDistance] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);
  const [statistics, setStatistics] = useState({
    totalRides: 1,
    totalDuration: 1,
    totalDistance: 1,
  });

  useEffect(() => {
    checkForStravaStatus();
    fetchBikeData();
    listenForGarminFiles();

    return;
  }, [])

  useEffect(() => {
    if(submitSuccess || stravaFailed || stravaSuccess) {
      window.history.replaceState({}, document.title, "/");
      setTimeout(() => {
        setSubmitSuccess(false)
        setStravaFailed(false)
        setStravaSuccess(false)
      }, 3000);
    }
    return;
  }, [submitSuccess, stravaFailed, stravaSuccess])

  const deleteFile = (key) => {
    let fileList = {}
    let fileInput = document.getElementById('file-input');
    fileInput.value = ''
    Object.assign(fileList, {...garminFiles});
    
    delete fileList[key]
    setGarminFiles(fileList);
  }

  useEffect(() => {
    setGarminFilesError()

    if(Object.keys(garminFiles).length < 1)
      setModalContent(<p style={{ textAlign: 'center', marginTop: '40px' }}>Choose the .gpx or .fit files you want to upload.</p>)
    else
      setModalContent(
        Object.keys(garminFiles).map((key, i) => {
          return (
            <div className={style.file__item} key={i}>
              <p className={style.button__label}>{garminFiles[key].name}</p>
              <button className={style.deleteFile__button} onClick={() => deleteFile(key)}>
                <IoMdClose style={{ width: '100%', height: '100%' }} />
              </button>
            </div>
          )
        })
      )

    return;
  }, [deleteFile, garminFiles])

  useEffect(() => {
    const co2perkm = 130 / 1000;

    setTotalRides(statistics.totalRides);
    setTotalDistance(statistics.totalDistance / 1000000);
    setAverageDuration(statistics.totalDuration / 60 / statistics.totalRides);
    setAverageSpeed((statistics.totalDistance / 1000) / (statistics.totalDuration / 3600));
    setAverageDistance(statistics.totalDistance / 1000 / statistics.totalRides);
    setCo2Saved(((statistics.totalDistance / 1000) * co2perkm) / 1000);
    return;
  }, [statistics])

  const checkForStravaStatus = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const stravaStatus = urlParams.get('stravaStatus');

    if(stravaStatus === 'success') {
      setStravaSuccess(true);
    } else if(stravaStatus === 'failed')
      setStravaFailed(true);
  }

  const listenForGarminFiles = () => {
    let fileInput = document.getElementById('file-input');

    fileInput.addEventListener('change', () => {
      console.log(fileInput.files)
      setGarminFiles(fileInput.files);
    });
  }

  const fetchBikeData = () => {
    fetch("https://api.bikedataproject.org/geo/Track/Publish")
    .then((response) => response.json())
    .then((data) => setStatistics(data));
  }

  const submitGarminFiles = () => {
    var data= new FormData();
    let fileInput = document.getElementById('file-input');

    Object.keys(garminFiles).forEach((key, index) => {
      data.append(index, garminFiles[key])
      if(index === Object.keys(garminFiles).length - 1) {
        setGarminFilesIsUploading(true);
        fetch('https://api.bikedataproject.org/file/upload', {
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(result => {
          setGarminFilesIsUploading(false);
          if(result.fileUploadedCount > 0)  
          {
            fileInput.value = ''
            setGarminFiles([])
            setGarminModalVisible(false)
            setSubmitSuccess(true)
          } else {
            setGarminFilesError(<p className={style.garmin__error}>Something went wrong, are you uploading the correct files? (.gpx and/or .fit) <br/> please try again.</p>)
          }
          
        })
        .catch(error => {
          setGarminFilesIsUploading(false);
          setGarminFilesError(<p className={style.garmin__error}>Something went wrong, are you uploading the correct files? (.gpx and/or .fit) <br/> please try again.</p>)
          console.error('Error:', error);
        });
      }
    })
  }

  const stravaLogin = () => {
    window.location.assign("https://www.strava.com/oauth/authorize?client_id=53761&response_type=code&redirect_uri=https://api.bikedataproject.org/registrations/strava&approval_prompt=force&scope=activity:read_all")
  }

  return useObserver(() => (
    <>
      <section className={style.header}>
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>{i18n.t('Heading')}</h1>
        </div>

        <div className={style.header__intro}>
          <p>{i18n.t('Introduction')}</p>
          <p className={style.intro__counter}>
            <p className={style.counter__total}>
              +
              <CountUp
                end={totalDistance}
                separator="."
                decimals={0}
                redraw={true}
                duration="2"
              />
              K
            </p>
            <p>{i18n.t('Label_total_km')}</p>
          </p>
        </div>
      </section>

      <section className={`${style.content} ${style.grid} ${style.help}}`}>
        <p className={`${style.bigLetter} ${style.helpLetter}`}>
          {i18n.t('Help')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Help_title')}</h2>
          <div className={style.content__text}>
            <p className={style.content__textBold}>{i18n.t('Ask_for_favor')}</p>
            <p>{i18n.t('By_sharing_your')}</p>
            <p>{i18n.t('Every_cyclist_can')}</p>
          </div>
        </div>
        <picture className={style.content__img}>
          <source
            media="(max-width: 600px)"
            srcSet="./assets/img/mockup-hor.png 400w"
          />
          <source
            media="(min-width: 600px)"
            srcSet="./assets/img/mockup-big.png 468w"
          />
          <img
            className={style.content__img}
            src="./assets/img/mockup-big.png"
            alt="Mock up of the app on a phone"
            width="468"
            height="593"
          />
        </picture>
      </section>

      <img
        className={style.line__img}
        src="./assets/img/bike_illustration.svg"
        alt="Line illustration of a bike and some trees."
      />

      <Element id="donate" name="donate">
        <section className={`${style.content} ${style.grid} ${style.donate}`}>
          <p className={`${style.bigLetter} ${style.donateLetter}`}>
            {i18n.t('Contribute_big')}
          </p>
          <div className={style.content__wrapper}>
            <h2 className={style.content__title}>{i18n.t('Donate_title')}</h2>
            <div className={style.content__text}>
              <p>{i18n.t('Several_ways_to_contribute')}</p>
              <p>{i18n.t('You_not_using')}</p>
            </div>
          </div>
          <div className={style.donate__buttons}>
            <div className={style.buttons__other}>
              <p>{i18n.t('Connect_existing_account')}</p>
              <div className={style.buttons__wrapper}>
                <button className={style.btn} onClick={() => stravaLogin()}>
                  Strava
                </button>
                <button
                  onClick={() => setGarminModalVisible(true)}
                  className={style.btn}
                >
                  File Upload
                </button>
                <button
                  onClick={() => setGarminModalVisible(true)}
                  className={style.btnWithLink}
                >
                  Bike Citizens
                </button>
                <a className={style.smallLink} target="_blank" href="https://wiki.bikedataproject.org/connect-your-app/bike-citizens">How do I get my data from Bike Citizens?</a>
                <button
                  onClick={() => setGarminModalVisible(true)}
                  className={style.btn}
                >
                  GPX
                </button>
              </div>
            </div>
            <div className={style.buttons__our}>
              <p>{i18n.t('Download_our_app')}</p>
              <div className={style.buttons__wrapper}>
                <button disabled className={style.btnDisabled}>Google Store</button>
                <button disabled className={style.btnDisabled}>Apple Store</button>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* file upload modal */}
      <div
        className={`${garminModalVisible ? style.modal__Visible : ''} ${
          style.upload__modal
        }`}
      >
        <div className={style.form__container}>
          <button
            className={style.close__button}
            onClick={() => setGarminModalVisible(false)}
          >
            <IoMdClose style={{ width: '100%', height: '100%' }} />
          </button>
          <div className={style.files__container}>{modalContent}</div>
          <div className={style.button__container}>
            {garminFilesError}
            <input id='file-input' type='file' accept=".gpx,.fit" multiple />
            <label for="file-input">Choose your files</label>
            <button onClick={() => submitGarminFiles()} className={style.submit__button}> 
            {garminFilesIsUploading? '' : 'Submit'}
            <MoonLoader
              size={20}
              color={"white"}
              loading={garminFilesIsUploading}
            /></button>
          </div>
        </div>
      </div>
      
      <div className={`${stravaFailed ? style.failed__notification__Visible : ''} ${style.notification}`}>
        <p>There was an issue connecting your strava account.</p>
      </div>

      <div className={`${stravaSuccess ? style.success__notification__Visible : ''} ${style.notification}`}>
        <p>Your Strava account was successfully connected.</p>
      </div>

      <div className={`${submitSuccess ? style.success__notification__Visible : ''} ${style.notification}`}>
        <p>Your files were successfully uploaded.</p>
      </div>

      <section className={`${style.content} ${style.data}`}>
        <h2 className={style.content__title}>{i18n.t('Data_title')}</h2>
        <p className={`${style.bigLetter} ${style.dataLetter}`}>
          {i18n.t('Data')}
        </p>
        <div className={`${style.data__overview} ${style.grid}`}>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <VisibilitySensor
                onChange={(isVisible) =>
                  isVisible
                    ? setStatisticsDuration(2)
                    : setStatisticsDuration(0)
                }
              >
                <CountUp
                  end={totalRides}
                  separator="."
                  redraw={true}
                  duration={statisticsDuration}
                />
              </VisibilitySensor>
            </span>
            <span className={style.data__label}>
              {i18n.t('Rides_collected')}
            </span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <CountUp
                end={totalDistance}
                separator="."
                decimals={0}
                redraw={true}
                duration={statisticsDuration}
              />
              K<span className={style.data__small}> km</span>
            </span>
            <span className={style.data__label}>
              {i18n.t('Distance_collected')}
            </span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <CountUp
                end={averageDistance}
                separator="."
                redraw={true}
                decimals={0}
                duration={statisticsDuration}
              />
              <span className={style.data__small}> km</span>
            </span>
            <span className={style.data__label}>
              {i18n.t('Average_distance')}
            </span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <CountUp
                end={averageSpeed}
                redraw={true}
                duration={statisticsDuration}
              />
              <span className={style.data__small}> km/h</span>
            </span>
            <span className={style.data__label}>{i18n.t('Average_speed')}</span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <CountUp
                end={averageDuration}
                separator="."
                decimals={0}
                redraw={true}
                duration={statisticsDuration}
              />
              <span className={style.data__small}> min</span>
            </span>
            <span className={style.data__label}>
              {i18n.t('Average_duration')}
            </span>
          </div>
          <div className={style.data__set}>
            <span className={style.data__number}>
              <CountUp
                end={co2Saved}
                separator="."
                decimals={0}
                redraw={true}
                duration={statisticsDuration}
              />
              K<span className={style.data__small}> t</span>
            </span>
            <span className={style.data__label}>{i18n.t('co2_saved')}</span>
          </div>
        </div>
        <div className={style.data__more}>
          <h3 className={style.subtitle}>{i18n.t('Data_subtitle')}</h3>
          <Link to={'/datamap'} className={style.btn}>
            {i18n.t('Data_button')}
          </Link>
        </div>
      </section>

      <section className={`${style.content} ${style.grid} ${style.contribute}`}>
        <p className={`${style.bigLetter} ${style.contributeLetter}`}>
          {i18n.t('Contribute_big')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Contribute_title')}</h2>
          <div className={style.content__text}>
            <p>{i18n.t('People_who_work')}</p>
            <p>{i18n.t('Common_goal')}</p>
          </div>
        </div>

        <img
          className={style.content__img}
          src="./assets/img/contribute.png"
          alt="People cycling"
        />
      </section>

      <section className={`${style.content} ${style.grid} ${style.visible}`}>
        <p className={`${style.bigLetter} ${style.visibleLetter}`}>
          {i18n.t('Power')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Visible_title')}</h2>
          <div className={style.content__text}>
            <p>{i18n.t('Community_more_visible')}</p>
            <p>{i18n.t('Globally_but_locally')}</p>
          </div>
        </div>
      </section>

      <img
        className={style.route__img}
        src="./assets/img/route.svg"
        alt="Striped line of a route with places marked on"
      />

      <section className={`${style.content} ${style.grid} ${style.informed}`}>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Informed_title')}</h2>
          <form
            action="https://bikedataproject.us10.list-manage.com/subscribe/post?u=0c7a4077dc373a78e97129b40&amp;id=48e38aad42"
            method="post"
            className={style.form}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
          >
            <div className={style.inputHidden} aria-hidden="true">
              <input
                type="text"
                name="b_4e280417525a8a98031f1ce33_9af7c29f8d"
                tabindex="-1"
                value=""
              />
            </div>
            <label>{i18n.t('Email_label')}</label>
            <div>
              <input
                className={style.form__input}
                type="email"
                placeholder={i18n.t('Informed_placeholder')}
                name="EMAIL"
                id="mce-EMAIL"
                required
              />
              <button className={style.form__button}>
                <img
                  className={style.arrow}
                  src="./assets/img/arrow-orange.svg"
                  alt="Arrow orange icon"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section
        className={`${style.content} ${style.grid} ${style.partners_remove}`}
      >
        <p className={`${style.bigLetter} ${style.partnersLetter}`}>
          {i18n.t('Partners')}
        </p>
        <div className={style.content__wrapper}>
          <h2 className={style.content__title}>{i18n.t('Partners_title')}</h2>
          <div className={`${style.partners} ${style.grid}`}>
            <a
              href="https://be.okfn.org/"
              className={style.partner}
              target="_blank"
            >
              <img
                className={`${style.partner__img} ${style.partner__okbLogo}`}
                src="./assets/img/osoc-logo-black.svg"
                alt="Logo of Open Knowlegde Belgium"
                width="170"
                height="117"
              />
            </a>
            <a
              href="https://www.wgfilm.com/"
              className={style.partner}
              target="_blank"
            >
              <img
                className={`${style.partner__img} ${style.partner__wgLogo}`}
                src="./assets/img/wg-film.png"
                alt="Logo of WG Film"
                width="150"
                height="150"
              />
            </a>
            <a
              href="https://mobilite-mobiliteit.brussels"
              className={style.partner}
              target="_blank"
            >
              <img
                className={style.partner__img}
                src="./assets/img/brussels-mobility.png"
                alt="Logo of brussels mobility"
                width="176"
                height="49"
              />
            </a>
            <a
              href="https://bike.brussels/nl/"
              className={style.partner}
              target="_blank"
            >
              <img
                className={`${style.partner__img} ${style.partner__bikeBrusselLogo}`}
                src="./assets/img/bike-for-brussels.webp"
                alt="Logo of Bike Fore Brussels"
                width="130"
                height="100"
              />
            </a>
            <a
              href="mailto:bikedataproject@openknowledge.be"
              className={`${style.partner} ${style.partner__up}`}
              target="_blank"
            >
              <h3 className={style.subtitle}>Want to partner up?</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  ));
};

export default Home;
