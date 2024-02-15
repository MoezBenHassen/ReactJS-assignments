import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import propTypes from 'prop-types';
import {useState} from "react";
Event.propTypes = {
    data: propTypes.object.isRequired
}
export default function Event(props) {
    const [eventData, setEvent] = useState(props.data);
    //increment the number of participants and decrement the number of tickets
    const bookEvent = () => {setEvent({
        ...eventData, nbParticipants: eventData.nbParticipants + 1 ,
        nbTickets: eventData.nbTickets - 1
        })
    };
    const bookEvent2 = () => {setEvent((previousState) => {
        return {
            ...previousState, nbParticipants: previousState.nbParticipants + 1 ,
            nbTickets: previousState.nbTickets - 1
        }
    })};
    const likeEvent = () => {setEvent((previousState) => {
        return {
            ...previousState, like: !previousState.like
        }
    }
    )};
    //
    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={eventData.nbTickets === 0 ? 'images/sold_out.png':`images/${eventData.img}`} />
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>
                    Price : {eventData.price} <br/>
                    Number of tickets {eventData.nbTickets} <br/>
                    Number of participants {eventData.nbParticipants}
                </Card.Text>
                {/*when I click on button call bookEvent state*/}
                <Button variant={eventData.like ? "danger": "success"} onClick={likeEvent}>
                    {eventData.like ? "👎Dislike" : "👍Like"}
                </Button>
                <Button variant="primary" onClick={bookEvent} disabled={eventData.nbTickets === 0 ? true : false}>Book an event</Button></Card.Body>
        </Card>
        </>
    );
}