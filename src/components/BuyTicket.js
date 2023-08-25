import React, { useMemo, useState, useEffect } from "react";
import { getRemainTickets } from "../api/products";
import Ticket from "./Ticket";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css";
import TicketModal from "./TicketModal";
import { Tooltip } from "antd";

const BuyTicket = () => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [ticketCount, setTicketCount] = useState([]);

  const changeNumberOfTickets = (event) => {
    const { value } = event.target;
    const newValue = value >= 2 ? 2 : 1;
    setNumberOfTickets(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRemainTickets();
        setTicketCount(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    if (acceptsTerms) {
      setIsShow(true);
    } else {
      alert("Va rugam sa acceptati conditia inainte sa cumparati!");
    }
  };

  return (
    <div className="ticket-wrapper container">
      <Ticket
        event="Event"
        description="Descriere"
        date="20.09.2023"
        price={100}
      />
      <div className="ticket-action">
        <div className="w-100">
          <div style={{ display: "flex" }}>
            <label
              className="form-label"
              style={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Bilet Selectat
            </label>
            <div className="ticket-input">
              <input
                type="number"
                value={numberOfTickets}
                onChange={changeNumberOfTickets}
                max={2}
                min={1}
              />
              <p>*maximum 2 bilete</p>
            </div>
          </div>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={acceptsTerms}
                onChange={() => setAcceptsTerms(!acceptsTerms)}
              />
              Accepta termeni si conditii
            </label>
          </div>
        </div>
        <div>
          {acceptsTerms ? (
            ticketCount < numberOfTickets ? (
              <Tooltip title="Nu mai sunt bilete disponibile." placement="top">
                <span>
                  <button className="btn custom-button" disabled={true}>
                    Cumpara Bilet
                  </button>
                </span>
              </Tooltip>
            ) : (
              <button className="btn custom-button" onClick={openModal}>
                Cumpara Bilet
              </button>
            )
          ) : (
            <button className="btn custom-button" disabled={true}>
              Cumpara Bilet
            </button>
          )}
        </div>
      </div>
      <TicketModal
        isShow={isShow}
        setIsShow={setIsShow}
        numberOfTickets={numberOfTickets}
      />
    </div>
  );
};

export default BuyTicket;
