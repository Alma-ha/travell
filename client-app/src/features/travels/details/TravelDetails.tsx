import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";


export default function TravelDetails(){

  const {travelStore}= useStore();
  const {selectedTravel : travel, openForm, cancelSelectedTravel} =travelStore;

  if(!travel) return <LoadingComponents content="Loading.."/>;
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
    <Button onClick={cancelSelectedTravel} variant="secondary">Cancel
    </Button>
    </ButtonGroup>
  </Card.Body>
</Card>
    )
}