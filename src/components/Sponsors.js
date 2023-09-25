import React from 'react';
import image1 from './resources/logoCompanii/Flex Logo, Blue.png';  
import image5 from './resources/logoCompanii/Logo_AutoSchunn_page-0001.jpg';
import image2 from './resources/logoCompanii/Webamboos_Logomark_Color.png';  
import image3 from './resources/logoCompanii/Network3.0.png';
import image4 from './resources/logoCompanii/DecoShift(0)_page-0001.jpg';



function Sponsors() {
  return (
    <div>
       <div style={{ height: '100px' }}></div>
      <div className="text-center">
        <h1>SPONSORI</h1>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <img src={image1} alt="Sponsor" className="img-fluid mb-3" />
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <img src={image5} alt="Sponsor" className="img-fluid mb-3" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <img src={image2} alt="Sponsor" className="img-fluid mb-3" />
          </div>
         
        </div>
        <div style={{ height: '100px' }}></div>
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <img src={image3} alt="Sponsor" className="img-fluid mb-3" />
          </div>
         
        </div>
        <div style={{ height: '100px' }}></div>
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <img src={image4} alt="Sponsor" className="img-fluid mb-3" />
           
          </div>
        </div>
       
        {/* ... Add more rows and images as needed */}
      </div>
     
    </div>
  );
}

export default Sponsors;
