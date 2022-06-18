import React, { ChangeEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Travel } from "../../../app/models/travel";

interface Props{
    travel: Travel | undefined;
    closeForm: () => void;
    createOrEdit: (travel: Travel) => void;
}

export default function TravelForm({travel: selectedTravel, closeForm, createOrEdit}: Props){

    const initialState= selectedTravel ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const [travel, setTravel] = useState(initialState);

    function handleSubmit(){
        createOrEdit(travel);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value} = event.target;
        setTravel({...travel, [name]: value})
    }

    return(
        <Container style={{height:"430px",backgroundColor:"white",marginTop:"40px"}}>
            <Form onSubmit={handleSubmit} autoComplete='off' style={{paddingTop:"20px"}}>
                <Form.Control placeholder="Title" value={travel.title} name='title' onChange={handleInputChange}/>
                <Form.Control as="textarea" placeholder="Description" value={travel.description} name='description' onChange={handleInputChange}/>
                <Form.Control placeholder="Category"value={travel.category} name='category' onChange={handleInputChange}/>
                <Form.Control placeholder="Date" value={travel.date} name='date' onChange={handleInputChange}/>
                <Form.Control placeholder="City" value={travel.city} name='city' onChange={handleInputChange}/>
                <Form.Control placeholder="Venue" value={travel.venue} name='venue' onChange={handleInputChange}/>
                <Button style={{float:"right",marginLeft:"10px"}} type="submit">Submit</Button>
                <Button onClick={closeForm} style={{float:"right"}} type="button">Cancel</Button>
            </Form>
        </Container>
    )
}