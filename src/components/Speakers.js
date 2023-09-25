import React, { useState } from 'react';

import speaker1 from './resources/vorbitori/1 Georgiana PopanSTORYTELLING.jpg';
import speaker2 from './resources/vorbitori/Nikoloz Kokhreidze CYBERSECURITY.jpg';
import speaker3 from './resources/vorbitori/Elena Ifrim ROBOTICA.jpeg';
import speaker5 from './resources/vorbitori/Florin Dragan EDUCATIE.jpeg';
import speaker6 from './resources/vorbitori/Chris Turner Leadership Organizational.jpg';
import speaker7 from './resources/vorbitori/Zoltan Veres INTELIGENTA EMOTIONALA.jpeg';
import speaker8 from './resources/vorbitori/Razvan Vlasin NEWPHARMA.jpeg';
import speaker9 from './resources/vorbitori/Eden Alimsait INGINERIE  NAVALA.jpg';
import speaker10 from './resources/vorbitori/Silvia Fierascu STIINTE SOCIALE.jpg';

import './cssCustom/Speakers.css'; // Import your CSS file for styling
function Speakers() {
    const [currentPage, setCurrentPage] = useState(1);
  
    // Define your speakers in structured data for easier mapping.
    const allSpeakers = [
      {
        title: 'STORYTELLING',
        name: 'Giorgiana Popan',
        fistName: 'Giorgiana',
        image: speaker1,
        about: 'despre',
        splits: [1,2],
        description: 'Pornim la drum învăluiți de arta poveștii. Cuvântul este modul prin care îi facem pe oameni să fie atenți la frumusețea lumii din jur.Giorgiana Popan este scânteia noastră de foc, ce deschide drumul vorbitorilor TEDxAristide Demetriade. Bucuria ei de a povesti aduce în prim plan ideea creșterii puterii de concentrare, a oricărui tip de public, pentru a dezvolta un conținut memorabil, prin intermediul storytelling-ului. Atenție, aici se povestește! 🤗',
        link: 'https://atelierdecuvinte.ro/arta-povestirii',
      },
      {
        title: 'CYBERSECURITY',
        name: 'Nikoloz Kokhreidze',
        fistName: 'Nikoloz',
        image: speaker2,
        about: 'about',
        splits: [1,3],
        description: 'Dreaming of a big safe world, we are eager to find out more about the spark within you. One that burns slowly driven by the need of knowledge. Nikoloz Kokhreidze is the match that makes the spark happen. His journey began at age 13, when he curiously discovered ethical hacking and cybersecurity. He brings the fire closer to Timișoara by helping us understand the need of cyber-security in our daily lives. With his burning desire to spread the knowledge, Nika makes us understand how cyber-security can impact different domains such as: health, financial, telecommunications and data protection privacy.',
        link: 'https://www.linkedin.com/in/nikolozk/',
      },
      {
        title: 'ROBOTICĂ',
        name: 'Elena Ifrim',
        fistName: 'Elena',
        image: speaker3,
        about: 'despre',
        splits: [0,2],
        description: 'Elementele care fac diferența în societatea contemporană ne trezesc întrebări despre viitor. Elena Ifrim este inginer IT în domeniul cercetării și inovării în sănătate. Parcursul acesteia a început la București, urmând să-și continue studiile masterale la Strasburg. Printre domeniile studiate, Elena a îmbinat etica, bioetica și inteligența artificială. Prin pasiunea și devotamentul ei ne invită să reflectăm asupra relației om - robot, întrucât aceștia nu reprezintă o amenințare, ci un instrument de îmbunătățire a condiției umane.',
        link: 'https://www.linkedin.com/in/elena-ifrim/',
      },
     
      {
        title: 'Leadership Organizațional',
        name: 'Chris Roy Turner',
        fistName: 'Chris',
        image: speaker6,
        about: 'about',
        splits: [1,3],
        description: 'It’s half past ten AM and your curiosity starts to burn. And so, we gather under the starlit iron curtain of curiosity. Chris Roy Turner transposes words into bridges to a new world. His voice spreads loudly the importance of effective communication in an organization. With his enthusiasm, Chris brings the leadership fire closer to Timișoara by joining us at TEDxAristide Demetriade.',
        link: 'https://www.linkedin.com/in/chrisroyturner',
      },
      {
        title: 'INTELIGENȚĂ EMOȚIONALĂ',
        name: 'Zoltan Veres',
        fistName: 'Zoltan',
        image: speaker7,
        about: 'despre',
        splits: [0,1],
        description: 'TU, dar și eu, am trecut prin emoțiile transpuse de fluturii din stomac, frica începutului unei noi etape în viață sau bucuria revederii celor dragi. Zoltan Veres este expert în dezvoltarea inteligenței emoționale. Ghidarea oamenilor spre echilibru emoțional îl aduce pe scena TEDxAristide Demetriade. Ideea sa este despre vindecarea suferințelor transgeneraționale cu ajutorul inteligenței emoționale, pentru a ne elibera de condiționările instalate la nivelul subconștientului.',
        link: 'https://www.linkedin.com/in/zoltan-veres',
      },
      {
        title: 'ȘTIINȚE SOCIALE',
        name: 'Silvia Fierăscu',
        fistName: 'Silvia',
        image: speaker10,
        about: 'despre',
        splits: [1,3],
        description: 'Relațiile sociale sunt conexiunile care au un impact semnificativ asupra universului nostru mental, emoțional și fizic. Ele ne oferă oportunități de creștere și dezvoltare personală. Silvia Fierăscu este cercetător în științe sociale. Ea transpune problemele complexe în soluții pentru dezvoltarea organizațională, buna guvernare și reziliența societății civile. Discursul ei ne va prezenta cum se transformă o rețea inactivă de oameni într-una activă şi cu impact în comunitate, folosind tehnici de mapping.',
        link:'https://www.linkedin.com/in/silviafierascu',
      },
      {
        title: 'NEWPHARMA',
        name: 'Răzvan Vlasin',
        fistName: 'Răzvan',
        image: speaker8,
        about: 'despre',
        splits: [1,3],
        description: 'Trăim într-o lume în care fiecare bătaie a inimii contează. Orice respirație reprezintă o speranță la viață. Răzvan Vlasin este CIO în cadrul unei companii internaționale de software. Rolul său este de a aduce mai mult awarness și de a crea un impact pozitiv în viețile oamenilor, pentru a adopta un stil de viață sănătos. Pe scena TEDxAristide Demetriade, Răzvan susține ideea potrivit căreia oamenii pot evita să devină pacienți și pot evita să intre în mindsetul de pacient, prin intermediul tehnologiei și al domeniului Pharma.',
        link:'https://www.linkedin.com/in/razvanvlasin',
      },
      {
        title: 'INGINERIE NAVALĂ',
        name: 'Eden Alimsait',
        fistName: 'Eden',
        image: speaker9,
        about: 'despre',
        splits: [2,4],
        description: 'Oh, marea, este un mister continuu. Ne inspiră să visăm și să ne dorim mai mult. Marea este neantul care ne aduce întotdeauna la liman, după o furtună. Eden Alimsait este specialist în inginerie navală. De-a lungul carierei sale a descoperit frumusețea mării, în calitate de mecanic pe vapoare de mare tonaj. Ne va inspira cu ideea sa de a transforma apa de mare în apă potabilă, prin tehnici specifice ingineriei navale. El susține că acest procedeu poate fi aplicat inclusiv în satele din România, care suferă de lipsa apei potabile.',
        link:'https://www.linkedin.com/in/eden-alimsait-9726b222a/',
      },
      
      {
        title: 'EDUCAȚIE',
        name: 'Florin Drăgan',
        fistName: 'Florin',
        image: speaker5,
        about: 'despre',
        splits: [2,4],
        description: 'Viteza în care trăim are un ritm amețitor. Prietenul, colegul sau simplul trecător pe stradă trăiesc experiențe diametral opuse în 24 de ore, ce le pot schimba viața. Totuși, ei și noi, tu și eu, avem un punct comun: EDUCAȚIA. Florin Drăgan este Rector al Universității Politehnica Timișoara. Ideea sa relevă impactul tehnologiei care produce o schimbare pozitivă în mentalitatea educatorilor, pentru a ghida generațiile viitoare. Da, tehnologia face parte din viețile noastre. Integrarea sa în sistemul de educație este un prim pas spre conectarea directă cu viitorul.',
        link: 'http://www.upt.ro/Informatii_confunivdring-florin-dragan---rector_1423_ro.html',
      },
      // Add more speaker objects for all your speakers.
    ];
  
    const speakersPerPage = 4;
    const totalPages = Math.ceil(allSpeakers.length / speakersPerPage);
    
    const currentSpeakers = allSpeakers.slice(
      (currentPage - 1) * speakersPerPage,
      currentPage * speakersPerPage
    );
  
    return (
      <div className="container py-5 my-5">
        {currentSpeakers.map((speaker, index) => (
          <React.Fragment key={index}>
            <div className="row">
              {/* For even indexed speakers */}
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 speaker-info">
                    {/* ... your speaker text content ... */}
                    <div className="text-center mb-4">
                <h4>Firestarter</h4>
                <h1 className="firestarter-title">{speaker.title}</h1>
                <p className="speaker-name">{speaker.name}</p>
                <p className="justified-speakers">
  {
    (() => {
      const parts = speaker.description.split('.');
      let currentIndex = 0;
      const renderedText = [];

      const splits = speaker.splits || []; // Default to an empty array if `splits` is not present

      for (let i = 0; i < parts.length; i++) {
        if (splits.includes(i)) {
          renderedText.push(parts.slice(currentIndex, i + 1).join('.') + '.');
          renderedText.push(<div className="mt-2" key={i}></div>);
          currentIndex = i + 1;
        }
      }

      renderedText.push(parts.slice(currentIndex).join('.'));
      return renderedText;
    })()
  }
</p>

                <div className="centered-text-speakers">
                  Info {speaker.about} {speaker.fistName}:<br />
                  <a className="footer-link" href={speaker.link}>
                    {speaker.link}
                  </a>
                </div>
              </div>
                  </div>
                  <div className="col-md-6">
                    <img src={speaker.image} alt={speaker.name} className="img-fluid speaker-image" />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <img src={speaker.image} alt={speaker.name} className="img-fluid speaker-image" />
                  </div>
                  <div className="col-md-6 speaker-info">
                    <div className="text-center mb-4">
                <h4>Firestarter</h4>
                <h1 className="firestarter-title">{speaker.title}</h1>
                <p className="speaker-name">{speaker.name}</p>
                <p className="justified-speakers">
  {
    (() => {
      const parts = speaker.description.split('.');
      let currentIndex = 0;
      const renderedText = [];

      const splits = speaker.splits || []; // Default to an empty array if `splits` is not present

      for (let i = 0; i < parts.length; i++) {
        if (splits.includes(i)) {
          renderedText.push(parts.slice(currentIndex, i + 1).join('.') + '.');
          renderedText.push(<div className="mt-2" key={i}></div>);
          currentIndex = i + 1;
        }
      }

      renderedText.push(parts.slice(currentIndex).join('.'));
      return renderedText;
    })()
  }
</p>
                <div className="centered-text-speakers">
                  Info {speaker.about} {speaker.name}:<br />
                  <a className="footer-link" href={speaker.link}>
                    {speaker.link}
                  </a>
                </div>
              </div>
                  </div>
                </>
              )}
            </div>
            <hr className="my-5" />
          </React.Fragment>
        ))}
  
        {/* Pagination controls */}
    <div className="pagination-buttons row mt-5">
      <div className="col text-center">
        <button
          className="btn btn-primary mr-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          &lt; 
        </button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`btn btn-${idx + 1 === currentPage ? 'primary' : 'secondary'} mx-1`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="btn btn-primary ml-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
         
         &gt; 
        </button>
      </div>
    </div>
  </div>
    );
  }
  
  export default Speakers;