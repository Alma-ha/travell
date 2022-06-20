import { observer } from "mobx-react-lite";
import React, {SyntheticEvent, useState} from "react";
import { Button, Card, CardGroup, Container,Form, PageItem, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";


export default observer(function TravelList(){

    const {travelStore} =useStore();
    const {deleteTravel, travelsByDate, loading} = travelStore;

    const [target, setTarget] = useState('');

    function handleTravelDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteTravel(id);
    }
    

   
    return(
        <Container>
            
        <CardGroup style={{display:"table-row-group"}}>
                   {travelsByDate.map(travel => (
                       <Row>
                           <Col>
                       <Card key={travel.id} style={{width:"600px", marginBottom:"10px"}}>
                      <Card.Body>
                      <Card.Title  as='a' style={{textDecoration:"none",color:"blue",fontSize:"20px"}}>{travel.title}</Card.Title>
                     <Card.Text>
                         <div>{travel.description}</div>
                         <div>{travel.city}, {travel.venue}</div>
                         <Link to={`/travels/${travel.id}`}>
                             <Button style={{float:"right",color:"white"}}>View</Button></Link>
                             <Button 
                             name={travel.id}
                             disabled={loading && target == travel.id} onClick={(e) => handleTravelDelete(e,travel.id)} style={{float:"right",color:"white",marginRight:"3px",backgroundColor:"red",borderColor:"red"}}>Delete</Button>
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
})