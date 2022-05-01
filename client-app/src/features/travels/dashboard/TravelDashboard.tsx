import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Travel } from "../../../app/models/travel";
import TravelList from "./TravelList";

interface Props{
    travels: Travel[];
}


export default function TravelDashboard({travels}: Props) {
    return (
        <Container>
            
             <TravelList travels={travels}/>
          
        </Container>
    )
}