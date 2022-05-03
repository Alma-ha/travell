import React from "react";
import { Button, Card, CardGroup, Container,Form, PageItem, Row, Col } from "react-bootstrap";
import { Travel } from "../../../app/models/travel";

interface Props{
    travels:Travel[];
    selectTravel: (id: string) => void;
}

export default function TravelList({travels, selectTravel}: Props){
    return(
        <Container>
            
        <CardGroup style={{display:"table-row-group"}}>
                   {travels.map(travel => (
                       <Row>
                           <Col>
                       <Card key={travel.id} style={{width:"600px", marginBottom:"10px"}}>
                      <Card.Body>
                      <Card.Title  as='a' style={{textDecoration:"none",color:"blue",fontSize:"20px"}}>{travel.title}</Card.Title>
                     <Card.Text>
                         <div>{travel.description}</div>
                         <div>{travel.city}, {travel.venue}</div>
                             <Button onClick={() => selectTravel(travel.id)} style={{float:"right",color:"white"}}>View</Button>
                             <label>{travel.category}</label>
                     </Card.Text>
                      </Card.Body>
                      </Card>
                      </Col>
                      </Row>
                   ))}
    </CardGroup>
        </Container>
    )
}