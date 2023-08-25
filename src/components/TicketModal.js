import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { postProduct } from "../api/product";
import { getAllProducts } from "../api/products";

const defaultFormData = {
  email: "",
  first_name: "",
  last_name: "",
  profession: "",
  company: "",
};

const TicketModal = ({ isShow, setIsShow, numberOfTickets }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [clientAgrees, setClientAgrees] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProducts();
        const data = res.data;
        setAvailableProducts(data.filter((product) => !product?.state));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const productItems = useMemo(
    () =>
      numberOfTickets === 2
        ? [availableProducts[0]?.key_id, availableProducts[1]?.key_id]
        : [availableProducts[0]?.key_id],
    [numberOfTickets, availableProducts]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await postProduct({
      ...formData,
      quantity: numberOfTickets,
      amount: 150,
      productItems,
    });
    setFormData(defaultFormData);
    if (stripe?.url) {
      window.location.assign(stripe.url);
    }
    onClose();
  };

  return (
    <div
      className={`modal ${isShow ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-dialog modal-wrap">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Completati campurile</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Prenume
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Nume
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
                <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Varsta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profession" className="form-label">
                  Profesie
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">
                  Companie
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>
                  <input
                    type="checkbox"
                    checked={clientAgrees}
                    onChange={() => setClientAgrees(!clientAgrees)}
                    style={{ marginRight: "10px" }}
                    required
                  />
                  Clientul accepta sa doneze banii
                </label>
              </div>
              <button type="submit" className="btn btn-dark">
                Cumpara
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
