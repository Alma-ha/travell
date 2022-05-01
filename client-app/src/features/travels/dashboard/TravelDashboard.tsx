import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Travel } from "../../../app/models/travel";

interface Props{
    travels: Travel[];
}


export default function TravelDashboard({travels}: Props) {
    return (
        <Container>
            <Row width='10'>
               <Col width='10'>
               <ul>
             {travels.map(travel => (
                  <li key={travel.id} style={{listStyleType:'none'}}>
                      {travel.title}
                   </li>
                 ))}
             </ul>
               </Col>
            </Row>
        </Container>
    )
}