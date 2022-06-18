import React from "react";
import { Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Travel } from "../../../app/models/travel";
import TravelList from "./TravelList";
import TravelDetails from "../details/TravelDetails";
import TravelForm from "../form/TravelForm";

interface Props{
    travels: Travel[];
    selectedTravel: Travel | undefined;
    selectTravel: (id: string) => void;
    cancelSelectTravel: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (travel: Travel) => void;
    deleteTravel: (id: string) =>void;
}


export default function TravelDashboard({travels,selectedTravel,deleteTravel, selectTravel,
    cancelSelectTravel, editMode, openForm, closeForm, createOrEdit}: Props) {
    return (
        <Container>
            <Col style={{display:"grid"}}>
             <TravelList travels={travels}
              selectTravel={selectTravel}
              deleteTravel={deleteTravel}
              />
             <Col style={{gridColumnStart:2,gridColumnEnd:3}}>
             {selectedTravel && !editMode &&
                <TravelDetails travel={selectedTravel} 
                cancelSelectTravel={cancelSelectTravel}
                openForm={openForm}
                />}
                {editMode &&
                <TravelForm closeForm={closeForm} travel={selectedTravel} createOrEdit={createOrEdit}/>}
            </Col>
             </Col>
            
          
        </Container>
    )
}