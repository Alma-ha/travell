import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";


export default observer (function StoryDetails(){

  const {storyStore}= useStore();
  const {selectedStory : story, loadStory, loadingInitial} =storyStore;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
      if(id) loadStory(id);
  }, [ id, loadStory]);

  if(loadingInitial || !story) return <LoadingComponents content="Loading.."/>;


    return(
        <Card style={{ width: '37rem', margin:"auto"}}>
  <Card.Img variant="top" src={`/assets/categoryImages/${story.city}.jpg`} />
  <Card.Body>
    <Card.Title>{story.title}</Card.Title>
    <Card.Text>
      {story.storydescription}
    </Card.Text>
    <ButtonGroup>
      <Link to={`/manage/${story.id}`}>
    <Button  variant="primary">Edit
    </Button></Link>
    <Link to={'/stories'}>
    <Button  variant="secondary">Cancel
    </Button></Link>
    </ButtonGroup>
  </Card.Body>
</Card>
    )
})