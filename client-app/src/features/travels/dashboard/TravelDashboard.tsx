import React from "react";
import { Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelList from "./TravelList";
import TravelDetails from "../details/TravelDetails";
import TravelForm from "../form/TravelForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";



export default observer(function TravelDashboard() {

        const {travelStore} = useStore();

        const {selectedTravel, editMode} = travelStore;
    return (
        <Container>
            <Col style={{display:"grid"}}>
             <TravelList/>
             <Col style={{gridColumnStart:2,gridColumnEnd:3}}>
             {selectedTravel && !editMode &&
                <TravelDetails/>}
                {editMode &&
                <TravelForm />}
            </Col>
             </Col>
            
          
        </Container>
    )
})