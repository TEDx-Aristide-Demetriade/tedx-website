// src/components/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './cssCustom/customStyles.css';
import videoSource from './resources/videos/Firestarters.mp4';
import imagine1 from './resources/pictures/image00003.jpeg';



function Home () {
  return (
    
    <div>
    

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
    
      {/* Big Title */}
      <div className="row">
      <div className="col text-center col-md-6">
          <h2></h2>
        </div>
        <div className="col text-center col-md-6">
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
        <div className="col-md-6 col-md-6 d-flex flex-column justify-content-center">
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
          Vom învăța de la cei 12 vorbitori, cum în momente de criză putem să reaprindem flacăra din interiorul nostru, pentru a reuși în viață
        
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
   <div className="container-fluid bg-black text-white d-flex align-items-center justify-content-center p-0" style={{ height: '307px', margin: '0 -15px' }}>
        <div className="row col-lg-6">
          <div className="d-flex flex-column justify-content-left p-4">
          <h2 className="text-center" style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '15px' }}>
            Data: 24 noiembrie 2023 - Locație: Venue, Timișoara</h2>
            <h2 className="text-center" style={{ fontSize: '25px', lineHeight: '1.5', marginBottom: '15px' }}>
              COUNTER TILL TEDxARISTIDE DEMETRIADE Event
            </h2>
          </div>
         
        </div>
        <div className="row col-lg-2"> 
        <div className="col-lg-6 d-flex justify-content-center  p-2">
            <button className="btn custom-button">BILETE</button>
          </div>
      </div>
      </div>


              {/* New Section */}
      <div className="container-fluid bg-white text-black d-flex align-items-center justify-content-center p-0" style={{ height: '307px', margin: '0 -15px' }}>
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center p-4">
            <h2 className="text-center" style={{ fontFamily: 'montserrat', fontSize: '24px', marginBottom: '15px' }}>
              ABONAȚI-VĂ LA NEWSLETTER
            </h2>
            <div className="text-center">
              <input type="email" placeholder="EMAIL..." className="form-control text-center" style={{ backgroundColor: '#D9D9D9' }} />
              
            </div>
          </div>
        </div>
      </div>


      
    </div>

    

    
  

  );
};

export default Home;
