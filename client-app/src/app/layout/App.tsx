import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Travel } from '../models/travel';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TravelDashboard from '../../features/travels/dashboard/TravelDashboard';

function App() {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [selectedTravel, setSelectedTravel]= useState<Travel | undefined>(undefined);

  useEffect(() => {
    axios.get<Travel[]>('http://localhost:5000/api/travels').then(response => {
    setTravels(response.data);
    })
  }, [])

  function handleSelectTravel(id: string){
    setSelectedTravel(travels.find(x => x.id === id));

  }
  
  function handleCancelSelectTravel(){
    setSelectedTravel(undefined);
  }

  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
      <TravelDashboard travels={travels}
      selectedTravel={selectedTravel}
      selectTravel={handleSelectTravel}
      cancelSelectTravel={handleCancelSelectTravel}
      />
      </Container>
    </>
  );
}

export default App;
