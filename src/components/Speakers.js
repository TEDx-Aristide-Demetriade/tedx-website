// src/components/Speakers.js
import React from 'react';

function Speakers  () {
  return (
    
      <div className="container py-5 my-5"> {/* Add my-5 class for vertical margin */}
        <div className="row">
          {/* Left Column - Speaker 1 */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center mb-4">
              <h1>Firestarter</h1>
              <p>
              Descriere/Nume
              </p>
            </div>
            
          </div>
          
          {/* Right Column - Speaker 1 Image */}
          <div className="col-md-6">
           <img src="https://via.placeholder.com/748x593" alt="Speaker Placeholder" className="img-fluid" />
        </div>
        </div>
  
        <hr className="my-5" />
  
       
      </div>
  );
};

export default Speakers;
