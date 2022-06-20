import { observer } from "mobx-react-lite";
import React, {SyntheticEvent, useState} from "react";
import { Button, Card, CardGroup, Container,Form, PageItem, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";


export default observer(function StoryList(){

    const {storyStore} =useStore();
    const {deleteStory, storiesByDate, loading} = storyStore;

    const [target, setTarget] = useState('');

    function handleStoryDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteStory(id);
    }
    

   
    return(
        <Container>
            <CardGroup>
            {storiesByDate.map(story => (
  <Card style={{marginRight:"30px"}}>
    <Card.Img variant="top" src={`/assets/categoryImages/${story.city}.jpg`} style={{height:"250px"}} />
    <Card key={story.id} style={{width:"600px", marginBottom:"10px"}}></Card>
    <Card.Body>
    <Card.Title  as='a' style={{textDecoration:"none",color:"blue",fontSize:"20px"}}>{story.title}</Card.Title>
                     <Card.Text>
                         <div>{story.storydescription}</div>
                         <div>{story.city}</div>
                         <Link to={`/stories/${story.id}`}>
                             <Button style={{float:"right",color:"white"}}>View</Button></Link>
                         </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
            ))}
  </CardGroup>
  </Container>
    )
})