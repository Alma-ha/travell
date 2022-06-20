import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import HomeWidgets from './HomeWidgets';

export default observer(function HomePage() {

const {travelStore} = useStore();
const {loadTravels, travelRegistry} =travelStore;


useEffect(() => {
if(travelRegistry.size <= 1) loadTravels();
}, [travelRegistry.size, loadTravels])




if(travelStore.loadingInitial) return <LoadingComponents content='Loading app' />
return (

        <Container style={{marginTop:'7em'}}>
            <img src='/assets/categoryImages/World.jpg'></img>
            <h1>Where to next?</h1>
            <HomeWidgets/>
        </Container>
    )
})