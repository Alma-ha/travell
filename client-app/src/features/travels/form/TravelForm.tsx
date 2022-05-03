import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function TravelForm(){
    return(
        <Container style={{height:"430px",backgroundColor:"white",marginTop:"40px"}}>
            <Form style={{paddingTop:"20px"}}>
                <Form.Control placeholder="Title"/>
                <Form.Control as="textarea" placeholder="Description"/>
                <Form.Control placeholder="Category"/>
                <Form.Control placeholder="Date"/>
                <Form.Control placeholder="City"/>
                <Form.Control placeholder="Venue"/>
                <Button style={{float:"right",marginLeft:"10px"}} type="submit">Submit</Button>
                <Button style={{float:"right"}} type="button">Cancel</Button>
            </Form>
        </Container>
    )
}