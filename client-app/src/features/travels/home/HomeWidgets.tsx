import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, CardGroup, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";


export default observer (function HomeWidgets(){

    const {travelStore} =useStore();
    const { travelsByDate, loading} = travelStore;
    const [target, setTarget] = useState('');
 
    return(
        <Container>
        <CardGroup>
        {travelsByDate.map(travel => (
        <Card style={{ width: '37rem', margin:"auto"}}>
            <Link to='/travels'>
        <Card.Img variant="top" src={`/assets/categoryImages/${travel.city}.jpg`} style={{height:"150px"}}/></Link>
        <Card.Body>
            <Card.Title>{travel.title}</Card.Title>
        </Card.Body>
        </Card>
        ))}
        </CardGroup>
        </Container>
    )
})