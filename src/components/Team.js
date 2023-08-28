import React , { useState }from 'react';
import curator from './resources/echipa/curator/Dragos_Argint.jpg';
import trainer1 from './resources/echipa/traineri/Catalina Moleavin.jpeg';
import trainer2 from './resources/echipa/traineri/Cristina Onofrei.jpeg';

import trainer3 from './resources/echipa/traineri/Ioana Popescu.jpeg';


import trainer4 from './resources/echipa/traineri/Iszabella Takacs.jpeg';

import trainer5 from './resources/echipa/traineri/Oana Joumah.jpeg';





function Team() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState('');
  const [selectedParagraph, setSelectedParagraph] = useState('');

  const handlePhotoClick = (photoUrl, header, paragraph) => {
    setSelectedPhoto(photoUrl);
    setSelectedHeader(header);
    setSelectedParagraph(paragraph);
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center ">
            <h1>Echipa</h1>
            <p>
              We are a passionate group of individuals committed to creating impactful presentations
              for our audience. Replace this with information about your organization or event.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={curator} alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
          <div className="col-md-2 d-flex justify-content-center">
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer1} alt="Placeholder" className="img-fluid mb-3 standard-image" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer2} alt="Placeholder" className="img-fluid mb-3 standard-image" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer3} alt="Placeholder" className="img-fluid mb-3 standard-image" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer4} alt="Placeholder" className="img-fluid mb-3 standard-image" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src={trainer5} alt="Placeholder" className="img-fluid mb-3 standard-image" />
          </div>
        </div>S
        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center">
            <img src="https://via.placeholder.com/173x76" alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src="https://via.placeholder.com/173x76" alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src="https://via.placeholder.com/173x76" alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src="https://via.placeholder.com/173x76" alt="Placeholder" className="img-fluid mb-3" />
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img src="https://via.placeholder.com/173x76" alt="Placeholder" className="img-fluid mb-3" />
          </div>
        </div>
      </div>
      <div className="container py-5">
      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <div className="text-center">
            <h2>Echipa</h2>
            <p>This is a paragraph for the first column.</p>
          </div>
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src={curator}
                alt="Placeholder"
                className="img-fluid mb-3"
                onClick={() =>
                  handlePhotoClick(
                    curator,
                    'Header 1',
                    'Paragraph for Image 1'
                  )
                }
              />
            </div>
            <div className="col-md-3 text-center">
              <img
                src={trainer1}
                alt="Placeholder"
                className="img-fluid mb-3"
                onClick={() =>
                  handlePhotoClick(
                    trainer1,
                    'Header 1',
                    'Paragraph for Image 1'
                  )
                }
              />
            </div>
            {/* Add more photo elements with onClick handlers */}
          </div>
          {/* ... Add more rows with photos ... */}
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
       <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2>Centered Text</h2>
            <p>
              This is a paragraph below the centered text.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <img src="https://via.placeholder.com/44x44" style={{ borderRadius: '50%' }} alt="Placeholder" />
            </div>
            <p>
              This is a text below the centered placeholder.
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
