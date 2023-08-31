import React , { useState }from 'react';
import curator from './resources/echipa/curator/Dragos_Argint.jpg';
import trainer1 from './resources/echipa/traineri/Anca Bâc.jpg';
import trainer2 from './resources/echipa/traineri/WhatsApp Image 2023-08-31 at 08.32.02.jpeg';

import trainer3 from './resources/echipa/marketing/Lavinia Pop.jpeg';


import trainer4 from './resources/echipa/marketing/Adriana Stamatin.jpeg';

import trainer5 from './resources/echipa/web/Dragos Bacitea.jpg';
import './cssCustom/team.css'; 

import allPhotos from './allphotos';



function Team() {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8;
  const photos = allPhotos; // Array of all photo paths

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]); // Set the first photo as active initially
  const [selectedHeader, setSelectedHeader] = useState('');
  const [selectedParagraph, setSelectedParagraph] = useState('');

  const handlePhotoClick = (photoUrl, header, paragraph) => {
    setSelectedPhoto(photoUrl);
    setSelectedHeader(header);
    setSelectedParagraph(paragraph);
  };
  return (
    <div>
      <div className="container .container-team py-5 py-5-team">
        <div className="row">
          <div className="col text-center text-center-team ">
            <h1>Echipa FIRESTARTERS</h1>
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
            <img src={curator} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer1} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer2} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer3} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer4} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer5} alt="Placeholder" className="img-fluid mb-3 standard-image-team" />
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
        <div className={`col-md-3  text-center text-center-team  ${selectedPhoto === photo ? 'active-team' : ''}`} key={index}>
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="img-fluid standard-image-team"
            onClick={() => handlePhotoClick(photo, 'Header 1', 'Paragraph for Image 1')}
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
      <div className="col-md-6">
          {selectedPhoto && (
            <div>
              <img
                src={selectedPhoto}
                alt="Selected"
                className="img-fluid mb-3"
              />
              <div className="text-left">
                <h2>{selectedHeader}</h2>
                <p>{selectedParagraph}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>



       {/* Additional Container */}
       <div className="container .container-team py-5 py-5-team">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center text-center-team ">
            <h2>"Abilitatea de a explica, inform, inspira si convinge este acum MULT mai importanta ca niciodata"
           </h2>
                    
            <p>
            Christian Anderson - Founder TED Global
            </p>
          </div>
        </div>
      </div>
        {/* White Space */}
     <div style={{ height: '100px' }}></div>
        {/* White Line */}
        <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{ backgroundColor: 'white', height: '20px' }} />
          </div>
        </div>
      </div>

     
    </div>
    
    
  );
}

export default Team;
