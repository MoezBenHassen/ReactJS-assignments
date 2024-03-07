
import Event from './Event.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import api from "../service/api.js";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Events() {
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
    const [showWelcome, setShowWelcome] = useState(false);
    useEffect(() => {
        setShowWelcome(true);
        setTimeout(() => {
            setShowWelcome(false);
        }, 2000);
    },[]);

    //getAllEvents
    const [listEvents, setEventsData] = useState([]);
    useEffect(() => {
        api.getallEvents().then((res) => {
            setEventsData(res.data);
            console.log(res.data.image);
        });
    }, []);

    //navigation
    const navigate = useNavigate();

    //delete event
    const handleDelete = (id) => {
        api.deleteEvent(id).then((res) => {
            console.log(res.data);
            const newList = listEvents.filter((e) => e.id !== id);
            setEventsData(newList);
        }
        );
    }
    return <>
        <Container>
            {showWelcome && <Alert variant="success">Welcome to the events list!</Alert>}
            <h1>Events</h1>
            <Button variant="primary" onClick={() => navigate("add")}>Add an Event</Button>

            <Row>
                {listEvents.map((e) => {
                    return <>
                        <Col><Event e={e} showAlert={handleShowAlert} deleteEvent={handleDelete}></Event></Col>
                    </>
                })}
            </Row>
            {showAlert && <Alert variant="success">you have booked an event!</Alert>}
        </Container>
    </>
}