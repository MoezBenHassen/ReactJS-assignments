import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
// import eventsList from "../../data/events.json";
import api from "../service/api.js";
const EventDetails = () => {
  const { id } = useParams();

  // const eventDetails = eventsList.find((event) => event.id === );
  const [eventDetails, setEventDetails] = useState(null);
  useEffect(() => {
      api.getallEvents(id).then((res) => {
          setEventDetails(res.data);
      });
  }, []);

  return (
    <div>
      {eventDetails && (
        <div>
          <img height={"150px"} src={eventDetails.nbTickets == 0 ? `/images/sold_out.png` : `/images/${eventDetails.img}`} />
          <h3>{eventDetails.name}</h3>
          <p>Description : {eventDetails.description}</p>
          <p>Number of participants : {eventDetails.date}</p>
          <p>Number of available tickets : {eventDetails.nbTickets}</p>
          <p>Ticket price : {eventDetails.price}</p>
        </div>
      )}
      {!eventDetails && <h1>Event does not exist</h1>}
    </div>
  );
};

export default EventDetails;
