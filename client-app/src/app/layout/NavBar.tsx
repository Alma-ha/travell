import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img src="./assets/logo2.png" height="40px" style={{marginRight: '10px'}}></img>TravelGuide</Navbar.Brand>
    <Nav className="Travels">
      <Nav.Link href="#home">Travels</Nav.Link>
      <Button>Create Travel</Button>
    </Nav>
            </Container>
        </Navbar>
    )
}