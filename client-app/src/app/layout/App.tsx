import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TravelDashboard from '../../features/travels/dashboard/TravelDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/travels/home/HomePage';
import TravelForm from '../../features/travels/form/TravelForm';
import TravelDetails from '../../features/travels/details/TravelDetails';
import StoryDashboard from '../../features/stories/dashboard/StoryDashboard';
import StoryForm from '../../features/stories/form/StoryForm';
import StoryDetails from '../../features/stories/details/StoryDetails';

function App() {
  
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/travels' element={ <TravelDashboard/> } />
      <Route path='/travels/:id' element={ <TravelDetails/> } />
      {['/createTravel', '/manage/:id'].map((path, location:any) => <Route path={path} key={location.key} element={<TravelForm/>} />)}
      <Route path='/stories' element={ <StoryDashboard/> } />
      <Route path='/stories/:id' element={ <StoryDetails/> } />
      {['/createStory', '/manage/:id'].map((path, location:any) => <Route path={path} key={location.key} element={<StoryForm/>} />)}
      </Routes>
      </Container>
    </>
  );
}

export default observer(App);
