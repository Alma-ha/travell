import React, { useEffect } from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TravelDashboard from '../../features/travels/dashboard/TravelDashboard';
import LoadingComponents from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {travelStore} = useStore();


  useEffect(() => {
    travelStore.loadTravels();
  }, [travelStore])

  


  if(travelStore.loadingInitial) return <LoadingComponents content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        

      <TravelDashboard />
      </Container>
    </>
  );
}

export default observer(App);
