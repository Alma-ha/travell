import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";


export default observer (function TravelDetails(){

  const {travelStore}= useStore();
  const {selectedTravel : travel, loadTravel, loadingInitial} =travelStore;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
      if(id) loadTravel(id);
  }, [ id, loadTravel]);

  if(loadingInitial || !travel) return <LoadingComponents content="Loading.."/>;


    return(
        <Card style={{ width: '37rem', margin:"auto"}}>
  <Card.Img variant="top" src={`/assets/categoryImages/${travel.city}.jpg`} />
  <Card.Body>
    <Card.Title>{travel.title}</Card.Title>
    <Card.Text>
      {travel.description}
    </Card.Text>
    <ButtonGroup>
      <Link to={`/manage/${travel.id}`}>
    <Button  variant="primary">Edit
    </Button></Link>
    <Link to={'/travels'}>
    <Button  variant="secondary">Cancel
    </Button></Link>
    </ButtonGroup>
  </Card.Body>
</Card>
    )
})