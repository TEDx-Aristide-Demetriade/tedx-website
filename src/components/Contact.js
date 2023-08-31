import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* First Column - Contact Form */}
        <div className="col-lg-6">
          <h1>Contacteaza-ne!</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nume si Prenume</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mesaj</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn custom-button">Trimite</button>
          </form>
        </div>

        {/* Second Column - Google Map */}
        <div className="col-lg-6">
          <h1>Gaseste-ne pe harta!</h1>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8599.210217437778!2d21.224087680097824!3d45.7526283515241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d7f9451df5f%3A0x7af51fdc3b64a724!2sCentru%20Timisoara!5e0!3m2!1sro!2sro!4v1693520552311!5m2!1sro!2sro"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
