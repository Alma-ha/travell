import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Travel } from "../../../app/models/travel";

interface Props{
    travel: Travel
    cancelSelectTravel: () => void;
    openForm: (id: string) => void;
}

export default function TravelDetails({travel, cancelSelectTravel, openForm}: Props){
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`/assets/categoryImages/${travel.city}.jpg`} />
  <Card.Body>
    <Card.Title>{travel.title}</Card.Title>
    <Card.Text>
      {travel.description}
    </Card.Text>
    <ButtonGroup>
    <Button onClick={() => openForm(travel.id)} variant="primary">Edit
    </Button>
    <Button onClick={cancelSelectTravel} variant="secondary">Cancel
    </Button>
    </ButtonGroup>
  </Card.Body>
</Card>
    )
}