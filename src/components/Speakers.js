import React from 'react';
import speaker1 from './resources/vorbitori/1 Georgiana PopanSTORYTELLING.jpg';
import './cssCustom/Speakers.css'; // Import your CSS file for styling

function Speakers() {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        {/* Left Column - Speaker 1 */}
        <div className="col-md-6 speaker-info">
          <div className="text-center mb-4">
            <h4>STORYTELLING</h4>
            <h1 className="firestarter-title">Firestarter</h1>
            <p className="speaker-name">Giorgiana Popan</p>
          </div>
        </div>

        {/* Right Column - Speaker 1 Image */}
        <div className="col-md-6">
          <img src={speaker1} alt="Speaker Placeholder" className="img-fluid speaker-image" />
        </div>
      </div>

      <hr className="my-5" />
    </div>
  );
}

export default Speakers;
