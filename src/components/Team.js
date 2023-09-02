import React , { useState }from 'react';

import trainer1 from './resources/echipa/traineri/Anca Bâc.jpg';
import trainer2 from './resources/echipa/traineri/Mihaela Bobei.jpeg';

import trainer3 from './resources/echipa/marketing/Lavinia Pop.jpeg';

import trainer4 from './resources/echipa/marketing/Adriana Stamatin.jpeg';

import trainer5 from './resources/echipa/web/Dragos Bacitea.jpg';
import './cssCustom/team.css'; 

import allPhotos from './allphotos';
import boardPhotos from './boardPhotos';




function Team() {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8;
  const photos = allPhotos; // Array of all photo paths
  const boardmPhotos = boardPhotos;
  const trainerPhotos = [trainer1, trainer2, trainer3, trainer4, trainer5];


  const [selectedPhoto, setSelectedPhoto] = useState(boardmPhotos[0]); // Set the first photo as active initially
  const [selectedPhotoBoardm, setSelectedPhotoBoardm] = useState(boardmPhotos[0]);

  const photoBoardDetails = [
    {
      header: 'Dragos Argint',
      paragraph: 'Curator',
    },
    {
      header: 'Anca Bâc',
      paragraph: 'Coordonator Traineri',
    },
    {
      header: 'Mihaela Bobei',
      paragraph: 'Coordonator Traineri',
    },
    {
      header: 'Dragoș Bacîtea',
      paragraph: 'Web Manager',
    },
    {
      header: 'Lavinia Pop',
      paragraph: 'Marketing Lead',
    },
    {
      header: 'Adriana Stamatin',
      paragraph: 'Design Lead',
    },
    
    
    

  ];

  const photoDetails = [
    
    {
      header: 'Catalina Moleavin',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Cristina Onofrei',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Ioana Popescu',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Iszabella Takacs',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Oana Joumah',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Raluca Erimescu',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Răzvan Curcubătă',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Răzvan Pitulice',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Simona Bader',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Tatjana Magdin',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Vlad Matica',
      paragraph: 'Trainer Public Speaking',
    },
    {
      header: 'Petru Cojocaru',
      paragraph: 'Fotograf',
    },
    {
      header: 'Simona Vartolomei',
      paragraph: 'Fotograf Lead',
    },
    {
      header: 'Mădălin Udrea',
      paragraph: 'Frontend Developer',
      
    },
    {
      header: 'Alexandru Hanțari',
      
      paragraph: 'Backend Developer',
    },
      
    {
      header: 'George Olteanu',
      paragraph: 'Fotograf',
    },
    {
      header: 'Krisztian Matyas',
      paragraph: 'Fotograf',
    },
    
    {
      header: 'Alex Drăghici',
      paragraph: 'Grafic Designer',
    },
    {
      header: 'Cristina Danileț',
      paragraph: 'Copywriting',
    }, 
     
    {
      header: 'Luana Munteanu',
      paragraph: 'Grafic Designer',
    },
   
    {
      header: 'Paul Pereanu',
      paragraph: 'Specialist Reels',
    },
    {
      header: 'Ovidiu Grecu',
      paragraph: 'Moderator',
    },
    {
      header: 'Roxana Ciobotea',
      paragraph: 'Moderator',
    },
    {
      header: 'Sergiu Foca',
      paragraph: 'Moderator',
    },
    
    {
      header: 'Andrada Roman',
      paragraph: 'Project Manager',
    },
    {
      header: 'Melania Stanaia',
      paragraph: 'Project Manager',
    },

    
    // ... Add entries for other photos
  ];

  const [selectedHeader, setSelectedHeader] = useState(photoBoardDetails[0].header);
  const [selectedParagraph, setSelectedParagraph] = useState(photoBoardDetails[0].paragraph);
  const [selectedBoardHeader, setSelectedBoardHeader] = useState(photoBoardDetails[0].header);
  const [selectedBoardParagraph, setSelectedBoardParagraph] = useState(photoBoardDetails[0].paragraph);
  const [isBoardPhoto, setIsBoardPhoto] = useState(false); 

  const handlePhotoBoardmClick = (photoUrl, index) => {
    setSelectedPhotoBoardm(photoUrl);
   
            setSelectedBoardHeader(photoBoardDetails[index].header);
      setSelectedBoardParagraph(photoBoardDetails[index].paragraph);
       

    const actualIndex = index;

  // Get the corresponding header and paragraph from photoDetails array
  const selectedBoardDetails = photoBoardDetails[actualIndex];
    setSelectedBoardHeader(selectedBoardDetails.header);
    setSelectedBoardParagraph(selectedBoardDetails.paragraph);
    setIsBoardPhoto(true);
  
  };

  const handlePhotoClick = (photoUrl, index) => {
    setSelectedPhoto(photoUrl);
   
            setSelectedHeader(photoDetails[index].header);
      setSelectedParagraph(photoDetails[index].paragraph);
       

    const actualIndex = (currentPage - 1) * photosPerPage + index;

  // Get the corresponding header and paragraph from photoDetails array
  const selectedDetails = photoDetails[actualIndex];
    setSelectedHeader(selectedDetails.header);
    setSelectedParagraph(selectedDetails.paragraph);
    setIsBoardPhoto(false);
  
  };

  const blackAndWhiteStyle = {
    filter: 'grayscale(100%)',
  };
  
  return (
    <div>
      <div className="container .container-team py-5 py-5-team">
        <div className="row">
          <div className="col text-center text-center-team ">
            <h1>Board FIRESTARTERS</h1>
            <p>
         
            </p>
          </div>
        </div>
      </div>

      <div className="container .container-team">
      <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          
          
  <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[0] ? 'active-team' : ''}`}>
    <img
      src={boardmPhotos[0]}
      alt={`Photo 0`}
      className="img-fluid standard-image-team"
      onClick={() => handlePhotoBoardmClick(boardmPhotos[0], 0)}
    />
  </div>

    
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-2 d-flex justify-content-center">
          <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[1] ? 'active-team' : ''}`}>
    <img
      src={boardmPhotos[1]}
      alt={`Photo 1`}
      className="img-fluid standard-image-team"
      style={blackAndWhiteStyle}
      onClick={() => handlePhotoBoardmClick(boardmPhotos[1], 1)}
    />
  </div>
          </div>

          <div className="col-md-2 d-flex justify-content-center">
          <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[2] ? 'active-team' : ''}`}>
   
          <img
      src={boardmPhotos[2]}
      alt={`Photo 2`}
      className="img-fluid standard-image-team"
      style={blackAndWhiteStyle}
      onClick={() => handlePhotoBoardmClick(boardmPhotos[2], 2)}
    /> </div></div>

          <div className="col-md-2 d-flex justify-content-center">
          <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[3] ? 'active-team' : ''}`}>
   
          <img
      src={boardmPhotos[3]}
      alt={`Photo 3`}
      className="img-fluid standard-image-team"
      onClick={() => handlePhotoBoardmClick(boardmPhotos[3], 3)}
    /></div></div>
          <div className="col-md-2 d-flex justify-content-center">
          <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[4] ? 'active-team' : ''}`}>
   
          <img
      src={boardmPhotos[4]}
      alt={`Photo 4`}
      className="img-fluid standard-image-team"
      onClick={() => handlePhotoBoardmClick(boardmPhotos[4], 4)}
    /></div> </div>
          <div className="col-md-2 d-flex justify-content-center">
          <div className={`text-center text-center-team ${selectedPhotoBoardm === boardmPhotos[5] ? 'active-team' : ''}`}>
   
          <img
      src={boardmPhotos[5]}
      alt={`Photo 5`}
      className="img-fluid standard-image-team"
      onClick={() => handlePhotoBoardmClick(boardmPhotos[5], 5)}
    /></div></div>
        </div>
           {/* White Line */}
     <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{ backgroundColor: 'white', height: '20px' }} />
          </div>
        </div>
      </div>
       
      </div>
      <div className="container container-team py-5 py-5-team">
      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
        <div className="text-center text-center-team ">
          <h2>Echipa</h2>
          <p></p>
        </div>
        <div className="row">
        {photos.slice((currentPage - 1) * photosPerPage, currentPage * photosPerPage).map((photo, index) => (
  <div className={`col-md-3 text-center text-center-team ${selectedPhoto === photo ? 'active-team' : ''}`} key={index}>
    <img
      src={photo}
      alt={`Photo ${index + 1}`}
      className="img-fluid standard-image-team"
      style={blackAndWhiteStyle} 
      onClick={() => handlePhotoClick(photo, index)}
    />
  </div>
))}
    </div>
          {/* Pagination buttons */}
  <div className="pagination-team">
    <button className='button-team'
      onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      disabled={currentPage === 1}
    >
      &lt;
    </button>
    <button className='button-team'
      onClick={() =>
        setCurrentPage(currentPage < Math.ceil(photos.length / photosPerPage) ? currentPage + 1 : currentPage)
      }
      disabled={currentPage === Math.ceil(photos.length / photosPerPage)}
    >
      &gt;
    </button>
  </div>
      </div>
      

      {/* Second Column */}
      <div className="col-md-6 second-column">
      {isBoardPhoto ? (
          <div>
            <img src={selectedPhotoBoardm} style={blackAndWhiteStyle} alt="Selected" className="img-fluid mb-3" />
            <div className="text-left">
              <h2>{selectedBoardHeader}</h2>
              <p>{selectedBoardParagraph}</p>
               {/* Add details for board photos if needed */}
            </div>
          </div>
        ) : (
          <div>
            <img src={selectedPhoto} style={blackAndWhiteStyle} alt="Selected" className="img-fluid mb-3" />
            <div className="text-left">
              <h2>{selectedHeader}</h2>
              <p>{selectedParagraph}</p>
            </div>
          </div>
        )}
         
        </div>
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


       {/* Additional Container */}
       <div className="container .container-team py-5 py-5-team">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center text-center-team ">
            <h2>"Abilitatea de a explica, informa, inspira și convinge este acum MULT mai importantă ca niciodată"
           </h2>
                    
            <p>
            Christian Anderson - Founder TED Global
            </p>
          </div>
        </div>
      </div>
        {/* White Space */}
     <div style={{ height: '100px' }}></div>
      

     
    </div>
    
    
  );
}

export default Team;
