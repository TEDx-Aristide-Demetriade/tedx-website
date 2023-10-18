import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import videoSource2 from './resources/videos/bfc8385a-c35c-4fca-ba7e-c021f82c27a6.mp4';

function About () {
  const isSoldOut = true;
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
    <><div className="container py-5">
      <div className="row">
        <div className="col text-center py-5">
          <h1>Despre eveniment</h1>
          <p>
          Cum a început totul? O poveste ce își deschide timid filele anul trecut, în septembrie 2022. Am căpătat încredere în urma a 3 aplicări pentru organizarea evenimentului, 2 respingeri dureroase, 9 luni de așteptare și un proces învățare continuă. 
          </p>
        </div>
      </div>
       {/* White Line */}
     <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{ backgroundColor: 'white', height: '20px' }} />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-4">
            
              <p>
              Într-o zi de vară, la începutul lunii mai, munca noastră a început să prindă contur. A fost o explozie de fericire. Am sărit atât de tare încât am pierdut cheia de la apartament. 
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
                Oh, vom susține vorbitori ale căror idei ne oferă soluții în perioade de criză.
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
      <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
  <a href={isSoldOut ? "#" : "https://forms.gle/6LjW2bPviRRWo4J38"} target="_blank" rel="noopener noreferrer" className={isSoldOut ? "disabled-link" : ""}>
    <button className="btn custom-button">
      {isSoldOut ? "SOLD OUT" : "BILETE"}
    </button>
  </a>
  <h2 className="text-center mt-3" style={{ fontSize: '1.0rem' }}>
    1 x 90 euro (450 ron) - include coffee break, prânzul, participare la conferință, dialog cu vorbitorii și networking.
  </h2>
</div>

    </div>
  </div>
</div>

      {/* White Space */}
     <div style={{ height: '100px' }}></div>
      
   
    
     </>
     
      
    
  );
};

export default About;
