import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import {v4 as uuid} from 'uuid';


export default observer(function TravelForm(){
    
    const navigate= useNavigate();
    const {travelStore} =useStore();
    const {createTravel, updateTravel,
         loading, loadTravel , loadingInitial} = travelStore;
    const {id} =useParams<{id: string}>();

    const [travel, setTravel] = useState({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    });

    useEffect(() =>{
        if(id) loadTravel(id).then(travel => setTravel(travel!))
    }, [id, loadTravel]);

  

    function handleSubmit(){
       if( travel.id.length === 0) {
        let newTravel={
            ...travel,
            id:uuid()
        };
        createTravel(newTravel).then(() => navigate(`/travels/${newTravel.id}`))
       }else{
        updateTravel(travel).then(() => navigate(`/travels/${travel.id}`))
       }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value} = event.target;
        setTravel({...travel, [name]: value})
    }


        if(loadingInitial) return <LoadingComponents content="loading travel..." />
    return(
        <Container style={{height:"430px",backgroundColor:"white",marginTop:"40px"}}>
            <Form onSubmit={handleSubmit} autoComplete='off' style={{paddingTop:"20px"}}>
                <Form.Control placeholder="Title" value={travel.title} name='title' onChange={handleInputChange}/>
                <Form.Control as="textarea" placeholder="Description" value={travel.description} name='description' onChange={handleInputChange}/>
                <Form.Control placeholder="Category"value={travel.category} name='category' onChange={handleInputChange}/>
                <Form.Control type='date' placeholder="Date" value={travel.date} name='date' onChange={handleInputChange}/>
                <Form.Control placeholder="City" value={travel.city} name='city' onChange={handleInputChange}/>
                <Form.Control placeholder="Venue" value={travel.venue} name='venue' onChange={handleInputChange}/>
                <Button disabled={loading} style={{float:"right",marginLeft:"10px"}} type="submit">Submit</Button>
                
                <Link to='/travels'>
                <Button style={{float:"right"}} type="button">Cancel</Button></Link>
            </Form>
        </Container>
    )
})