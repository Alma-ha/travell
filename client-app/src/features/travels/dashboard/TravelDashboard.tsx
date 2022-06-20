import React, { useEffect } from "react";
import { Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelList from "./TravelList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponents from "../../../app/layout/LoadingComponents";



export default observer(function TravelDashboard() {
    

        const {travelStore} = useStore();
        const {loadTravels, travelRegistry} =travelStore;


        useEffect(() => {
        if(travelRegistry.size <= 1) loadTravels();
        }, [travelRegistry.size, loadTravels])

    


    if(travelStore.loadingInitial) return <LoadingComponents content='Loading app' />
    return (
        <Container>
            <Col style={{display:"grid"}}>
             <TravelList/>
             <Col style={{gridColumnStart:2,gridColumnEnd:3}}>
                <h2>Travel filters</h2>
            </Col>
             </Col>
            
          
        </Container>
    )
})