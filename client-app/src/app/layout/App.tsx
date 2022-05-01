import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Travel } from '../models/travel';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TravelDashboard from '../../features/travels/dashboard/TravelDashboard';

function App() {
  const [travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    axios.get<Travel[]>('http://localhost:5000/api/travels').then(response => {
    setTravels(response.data);
    })
  }, [])

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
      <TravelDashboard travels={travels}/>
      </Container>
    </>
  );
}

export default App;
