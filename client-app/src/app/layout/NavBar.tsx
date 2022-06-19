import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from "../stores/store";



export default function NavBar(){

    const {travelStore} = useStore();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/"><img src="./assets/logo2.png" height="40px" style={{marginRight: '10px'}} alt="logo"></img>TravelGuide</Navbar.Brand>
    <Nav className="Travels">
      <Nav.Link href="/">Travels</Nav.Link>
      <Nav.Link href="./Foods">Foods</Nav.Link>
      <Button onClick={() => travelStore.openForm()}>Create Travel</Button>
    </Nav>
            </Container>
        </Navbar>
    )
}