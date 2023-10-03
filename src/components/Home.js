// src/components/Home.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './cssCustom/customStyles.css';
import videoSource from './resources/videos/Firestarters.mp4';
import imagine1 from './resources/pictures/image00003.jpeg';
import coverImage from './resources/pictures/poza_profil.png'; // Replace with the actual path to your cover image




function Home () {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const eventDate = new Date('2023-11-24T00:00:00Z').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = eventDate - currentDate;

      if (timeRemaining <= 0) {
        // Event has already occurred, you can handle this case
        clearInterval(interval);
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div>
       <head>
      {/* Existing head content */}
      
      {/* Open Graph Protocol (OGP) metadata for cover photo */}
      <meta property="og:title" content="TEDxARISTIDE DEMETRIADE" />
      <meta property="og:description" content="TEDxARISTIDE DEMETRIADE" />
      <meta property="og:image" content={coverImage} /> {/* Use the imported cover image */}
      {/* <meta property="og:url" content="URL_of_your_website" />  Replace with your website's URL */}
      {/*<meta property="og:type" content="website" />*/}
    </head>
    

    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <video className="d-block w-100" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
    
  </div>
  

</div>




      <div className="container">

      
      {/* White Line (CSS Background) */}
      
    
      {/* Big Title */}
      <div className="row d-flex justify-content-center justify-content-md-start justify-content-lg-end mt-4">
  <div className="col text-center col-md-6 text-md-start">
    <h2>TEDxARISTIDE DEMETRIADE</h2>
  </div>
</div>

        {/* White Line (CSS Background) */}
        <div className="row">
        <div className="col">
          <div
            style={{
              backgroundColor: 'white',
              height: '20px',
              width: '100%',
            }}
          />
        </div>
      </div>
      

      

      {/* Main Content */}
      <div className="row">
        <div className="col-md-6">
          {/* Image */}
          <img
            src={imagine1}
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-md-6 d-flex flex-column justify-content-center mt-2">
          {/* Right content */}
          <div>
          <h3>Tema evenimentului</h3>
          <p style={{ fontFamily: "Body P" }}>
          Drumul scânteilor de foc este un carusel de emoții, experiențe și idei creative ce schimbă lumea în care trăim.
          </p>
          <p style={{ fontFamily: "Body P" }}>
          Energie. Trăire. Exuberanță. Credință. Noutate. Vis. Bunătate. Umanitate.
          Descriu cu prisosință ideile vorbitorilor noștri, care devin pe scena 
          TEDxAristide Demetriade veritabili FIRESTATERS ai cunoașterii.
          </p>
          <p style={{ fontFamily: "Body P" }}>
          Ne reîntoarcem la noi înșine. Redescoperim diferitele forme ale autenticității. Creionăm un puzzle al oamenilor care îndrăznesc să viseze măreț.
          </p>
          <p style={{ fontFamily: "Body P" }}>
          Vom învăța de la cei 9 vorbitori, cum în momente de criză putem să reaprindem flacăra din interiorul nostru, pentru a reuși în viață.
        
          </p>
          <p style={{ fontFamily: "Body P" }}>
          Toamna aceasta, pe 24 noiembrie 2023, te invităm să crezi în visul nostru. 
          Te invităm să crezi  în puterea unei simple idei ce face să vibreze o lume întreagă.
          </p>
          {/* Learn More Button */}
        
          </div>
        </div>
      </div>
    </div>

     {/* White Space */}
     <div style={{ height: '50px' }}></div>
    {/* Responsive Block */}
    <div className="bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-6 mb-4">
        <div className="d-flex flex-column justify-content-left p-4">
          <h2 className="text-center mb-3" style={{ fontSize: '1.0rem' }}>
            Data: 24 noiembrie 2023
          </h2>
          <h2 className="text-center mb-3" style={{ fontSize: '1.0rem' }}>
            Locație: Venue, Timișoara
          </h2>
          <h2 className="text-center" style={{ fontSize: '1.3rem' }}>
        TEDxARISTIDE DEMETRIADE
      </h2>
      <div className="text-center">
        <div>
          <span>{days}</span> zile{' '}
          <span>{hours}</span> ore{' '}
          <span>{minutes}</span> minute{' '}
          <span>{seconds}</span> secunde
        </div>
      </div>
     
        </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center" style={{flexDirection: "column" }}>
      <a href="https://forms.gle/6LjW2bPviRRWo4J38" target="_blank" rel="noopener noreferrer">
    <button className="btn custom-button">BILETE</button>
  </a>
  <h2 className="text-center mt-3" style={{ fontSize: '1.0rem' }}>
           1 x 90 euro (450 ron) - include coffee break, prânzul, participare la conferință, dialog cu vorbitorii și networking.
          </h2>
      </div>
    </div>
  </div>
</div>





      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Ce înseamnă TEDx…?!</h2>
            <div className="embed-responsive embed-responsive-16by9 mt-4">
              <iframe
                title="TEDx Talk"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/JSP7GPU3Eic"
                allowfullscreen
                style={{
                  width: '100%', /* Default width for all screen sizes */
                  height: '400px', /* Default height for all screen sizes */
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

              {/* New Section */}
              <div className="bg-white text-black py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-6 offset-lg-3 text-center">
        <h2 className="mb-3" style={{ fontFamily: 'montserrat', fontSize: '24px' }}>
          ABONAȚI-VĂ LA NEWSLETTER
        </h2>
        <div className="input-group">
          <input type="email" className="form-control" placeholder="EMAIL..." style={{ backgroundColor: '#D9D9D9' }} />
          <div className="input-group-append">
          <button className="btn btn-primary" type="button" style={{ backgroundColor: 'white', color: '#ff2b06', border: '1px solid #ff2b06' }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      
    </div>

    

    
  

  );
};

export default Home;
