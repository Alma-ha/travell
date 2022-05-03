import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Travel } from "../../../app/models/travel";
import TravelList from "./TravelList";
import TravelDetails from "../details/TravelDetails";
import TravelForm from "../form/TravelForm";

interface Props{
    travels: Travel[];
    selectedTravel: Travel | undefined;
    selectTravel: (id: string) => void;
    cancelSelectTravel: () => void;
}


export default function TravelDashboard({travels,selectedTravel,selectTravel,
    cancelSelectTravel}: Props) {
    return (
        <Container>
            <Col style={{display:"grid"}}>
             <TravelList travels={travels} selectTravel={selectTravel}/>
             <Col style={{gridColumnStart:2,gridColumnEnd:3}}>
             {selectedTravel &&
                <TravelDetails travel={selectedTravel} cancelSelectTravel={cancelSelectTravel}/>}
                <TravelForm/>
            </Col>
             </Col>
            
          
        </Container>
    )
}