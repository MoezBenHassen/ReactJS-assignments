import Event from "./Event.jsx";
//import the content of events.json in data/events.json
import eventsData from "../data/events.json";
import {Alert, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function Events() {
    const [successAlert, setShowAlert] = useState(false);
    const [welcomeAlert, setShowWelcomeAlert] = useState(false);
    const showSuccessAlert = () => {
        setShowAlert(true);
        setTimeout(() =>
            setShowAlert(false), 1000);
    }
    useEffect(() => {
        setShowWelcomeAlert(true);
        setTimeout(() =>
            setShowWelcomeAlert(false), 3000);
    }, []);
    return <>
        <h1 style={{color: "red"}}>ATELIER N°2 PART 1 </h1>
        <Col>

            {
                welcomeAlert &&
                <Alert  variant={"success"}>
                    Welcome to the event
                </Alert>
            }
            <Row>
                {
                    eventsData?.map((e, index) => {
                        return <Event key={index} data={e}></Event>
                    })
                }

            </Row>
            {
                successAlert &&
                <Alert  variant={"success"}>
                    You have booked an event
                </Alert>
            }

        </Col>
    </>
}