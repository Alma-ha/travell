import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Travel } from '../models/travel';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TravelDashboard from '../../features/travels/dashboard/TravelDashboard';
import {v4 as uuid} from 'uuid';


function App() {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [selectedTravel, setSelectedTravel]= useState<Travel | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);


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


  function handleFormOpen(id?: string){
      id ? handleSelectTravel(id) : handleCancelSelectTravel();
      setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditTravel(travel: Travel){
    travel.id 
    ? setTravels([...travels.filter(x => x.id!== travel.id), travel])
    : setTravels([...travels, {...travel, id: uuid()}]);
    setEditMode(false);
    setSelectedTravel(travel);
  }

  function handleDeleteTravel(id: string){
    setTravels([...travels.filter(x => x.id!==id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
      <TravelDashboard travels={travels}
      selectedTravel={selectedTravel}
      selectTravel={handleSelectTravel}
      cancelSelectTravel={handleCancelSelectTravel}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}
      createOrEdit={handleCreateOrEditTravel}
      deleteTravel={handleDeleteTravel}
      />
      </Container>
    </>
  );
}

export default App;
