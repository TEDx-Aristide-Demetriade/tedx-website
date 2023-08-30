                                                  // src/components/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from './resources/pictures/image00003.jpeg';
import videoSource2 from './resources/videos/bfc8385a-c35c-4fca-ba7e-c021f82c27a6.mp4';

function About () {
  return (
    <><div className="container py-5">
      <div className="row">
        <div className="col text-center py-5">
          <h1>Despre eveniment</h1>
          <p>
          Cum a început totul? O poveste ce își deschide timid filele anul trecut, în septembrie 2022. Am căpătat încredere în urma a 3 aplicări pentru organizarea evenimentului, 2 respingeri dureroase, 9 luni de așteptare și un proces învățare continuă. 
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-4">
            
              <p>
              Într-o zi de vara, la începutul lunii mai, munca noastră a început să prindă contur. A fost o explozie de fericire. Am sărit atât de tare încât am pierdut cheia de la apartament. 
              </p>
            </div>
            <div className="mb-4">
               <p>
              Atunci am primit vestea că TED Global ne-a aprobat licența. TEDxAristide Demetriade este numele evenimentului ce reaprinde flacăra cunoașterii în Timișoara.
              </p>
            </div>
            <div>
                <p>
                FIRESTARTERS este tema evenimentului. Oameni din domenii, culturi și sfere profesionale diferite își reunesc ideile la Timișoara. Astfel, orașul nostru devine nu doar Capitală Culturală Europeană.
                 Timișoara devine orașul citadin deschis cunoașterii și oamenilor cu idei îndrăznețe.
              </p>
            </div>
            <div>
                <p>
                Oh, vom susține vorbitori ale căror idei ne ofera solutii în perioade de criză.
                 Sunt oameni care ne învață cum să reaprindem flacăra interioară în momente dificile, pentru a produce o schimbare benefică lumii în care trăim.              </p>
            </div>
            <div>
                <p>
                Flacăra ce arde în interiorul fiecăruia ne reîntoarce la adevăratul sens al ființei umane. Din 24 noiembrie 2023 vom îmbrățișa acest spirit pentru a tinde spre infinit.              </p>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
          <video className="d-block carousel-item-test custom-video-container" autoPlay loop muted>
        <source src={videoSource2} type="video/mp4" />
      </video>
</div>
        </div>
      </div>
   

    </div>
    
     
       
    {/* Responsive Block */}
   <div className="container-fluid bg-black text-white d-flex align-items-center justify-content-center p-0" style={{ height: '307px', margin: '0 -15px' }}>
        <div className="row col-lg-6">
          <div className="d-flex flex-column justify-content-left p-4">
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
      {/* White Space */}
     <div style={{ height: '100px' }}></div>
      
   
    
     </>
     
      
    
  );
};

export default About;
