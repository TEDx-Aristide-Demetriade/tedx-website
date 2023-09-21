import React from 'react';
import speaker1 from './resources/vorbitori/1 Georgiana PopanSTORYTELLING.jpg';
import speaker2 from './resources/vorbitori/Nikoloz Kokhreidze CYBERSECURITY.jpg';
import speaker3 from './resources/vorbitori/Elena Ifrim ROBOTICA.jpeg';
import speaker5 from './resources/vorbitori/Florin Dragan EDUCATIE.jpeg';
import './cssCustom/Speakers.css'; // Import your CSS file for styling

function Speakers() {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        {/* Left Column - Speaker 1 */}
        <div className="col-md-6 speaker-info">
          <div className="text-center mb-4">
            <h4>Firestarter</h4>
            <h1 className="firestarter-title">STORYTELLING</h1>
            <p className="speaker-name">Giorgiana Popan</p>
            <p class="justified-speakers">Pornim la drum învăluiți de arta poveștii. Cuvântul este modul prin care îi facem pe oameni să fie atenți la frumusețea lumii din jur.
 
 Giorgiana Popan este scânteia noastră de foc, ce deschide drumul vorbitorilor TEDxAristide Demetriade.
  
 Bucuria ei de a povesti aduce în prim plan ideea creșterii puterii de concentrare, a oricărui tip de public, pentru a dezvolta un conținut memorabil, prin intermediul storytelling-ului.
  
 Atenție, aici se povestește! 🤗
  
 </p> <div className="centered-text-speakers ">Info despre Georgiana:<br></br> <a className="footer-link" href="https://atelierdecuvinte.ro/arta-povestirii">https://atelierdecuvinte.ro/arta-povestirii</a></div>
          </div>
        </div>

        {/* Right Column - Speaker 1 Image */}
        <div className="col-md-6">
          <img src={speaker1} alt="Speaker Placeholder" className="img-fluid speaker-image" />
        </div>
      </div>

      <hr className="my-5" />

      <div className="row">
  {/* Right Column - Speaker 1 Image */}
  <div className="col-md-6">
    <img src={speaker2} alt="Speaker Placeholder" className="img-fluid speaker-image" />
  </div>

  {/* Left Column - Speaker 1 */}
  <div className="col-md-6 speaker-info">
    <div className="text-center mb-4">
      <h4>Firestarter</h4>
      <h1 className="firestarter-title">CYBERSECURITY</h1>
      <p className="speaker-name">Nikoloz Kokhreidze</p>
      <p class="justified-speakers"> 
Dreaming of a big safe world, we are eager to find out more about the spark within you. One that burns slowly driven by the need of knowledge.
 
Nikoloz Kokhreidze is the match that makes the spark happen. His journey began at age 13, when he curiously discovered ethical hacking and cybersecurity.
 
He brings the fire closer to Timișoara by helping us understand the need of cyber-security in our daily lives.
 
With his burning desire to spread the knowledge, Nika makes us understand how cyber-security can impact different domains such as: health, financial, telecommunications and data protection privacy.         ​
 
</p> <div className="centered-text-speakers ">Info about Nikoloz:<br></br> <a className="footer-link" href="https://www.linkedin.com/in/nikolozk/ ">https://www.linkedin.com/in/nikolozk/ </a></div>
    </div>
  </div>
</div>


      <hr className="my-5" />

      <div className="row">
        {/* Left Column - Speaker 1 */}
        <div className="col-md-6 speaker-info">
          <div className="text-center mb-4">
            <h4>Firestarter</h4>
            <h1 className="firestarter-title">ROBOTICĂ</h1>
            <p className="speaker-name">Elena Ifrim</p>
            <p class="justified-speakers">      
 
Elementele care fac diferența în societatea contemporană ne trezesc întrebări despre viitor.
 
Elena Ifrim este inginer IT în domeniul cercetării și inovării în sănătate. Parcursul acesteia a început la București, urmând să-și continue studiile masterale la Strasburg. Printre domeniile studiate, Elena a îmbinat etica, bioetica și inteligența artificială.
 
Prin pasiunea și devotamentul ei ne invită să reflectăm asupra relației om - robot, întrucât aceștia nu reprezintă o amenințare, ci un instrument de îmbunătățire a condiției umane.
​</p> <div className="centered-text-speakers ">Info despre Elena: <br></br><a className="footer-link" href="https://www.linkedin.com/in/elena-ifrim/">https://www.linkedin.com/in/elena-ifrim/</a></div>
          </div>
        </div>

        {/* Right Column - Speaker 1 Image */}
        <div className="col-md-6">
          <img src={speaker3} alt="Speaker Placeholder" className="img-fluid speaker-image" />
        </div>
      </div>

      <hr className="my-5" />

      <div className="row">
  {/* Right Column - Speaker 1 Image */}
  <div className="col-md-6">
    <img src={speaker5} alt="Speaker Placeholder" className="img-fluid speaker-image" />
  </div>

  {/* Left Column - Speaker 1 */}
  <div className="col-md-6 speaker-info">
  <div className="text-center mb-4">
            <h4>Firestarter</h4>
            <h1 className="firestarter-title">EDUCAȚIE</h1>
            <p className="speaker-name">Florin Drăgan </p>
            <p class="justified-speakers">
Viteza în care trăim are un ritm amețitor. Prietenul, colegul sau simplul trecător pe stradă trăiesc experiențe diametral opuse în 24 de ore, ce le pot schimba viața. Totuși, ei și noi, tu și eu, avem un punct comun: EDUCAȚIA.
 
Florin Drăgan este Rector al Universității Politehnica Timișoara. Ideea sa relevă impactul tehnologiei care produce o schimbare pozitivă în mentalitatea educatorilor, pentru a ghida generațiile viitoare.
 
Da, tehnologia face parte din viețile noastre. Integrarea sa în sistemul de educație este un prim pas spre conectarea directă cu viitorul.  
 
</p> <div className="centered-text-speakers ">Info despre Florin Drăgan:<br></br>  <a className="footer-link" href="http://www.upt.ro/Informatii_confunivdring-florin-dragan---rector_1423_ro.html">http://www.upt.ro/Informatii_confunivdring-florin-dragan---rector_1423_ro.html</a></div>
          </div>
  </div>
</div>


     
    
    </div>
  );
}

export default Speakers;
