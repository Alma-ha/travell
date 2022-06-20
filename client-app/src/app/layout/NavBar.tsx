import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";



export default function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/"><img src="./assets/logo2.png" height="40px" style={{marginRight: '10px'}} alt="logo"></img>TravelGuide</Navbar.Brand>
    <Nav className="Travels">
        <Nav.Link as={NavLink} to='/' >Homepage</Nav.Link>
      <Nav.Link as={NavLink} to='/travels'>Travels</Nav.Link>
      <Nav.Link href="./Foods">Foods</Nav.Link>
      <Nav.Link as={NavLink} to='/CreateTravel' style={{backgroundColor:"blue", borderColor:"darkblue",color:"white" }}> Create Travel </Nav.Link>
    </Nav>
            </Container>
        </Navbar>
    )
}