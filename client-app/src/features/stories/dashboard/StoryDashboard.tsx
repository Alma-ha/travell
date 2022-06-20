import React, { useEffect } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import StoryList from "./StoryList";
import { Link } from "react-router-dom";



export default observer(function StoryDashboard() {
    

        const {storyStore} = useStore();
        const {loadStories, storyRegistry} =storyStore;


        useEffect(() => {
        if(storyRegistry.size <= 1) loadStories();
        }, [storyRegistry.size, loadStories])

    


    if(storyStore.loadingInitial) return <LoadingComponents content='Loading app' />
    return (
        <Container>
           <Row xs={1} md={1} className="g-4">
             <StoryList/>
             </Row>
             <Link to='/CreateStory'>
                <Button  style={{backgroundColor:"#4B93A8", borderColor:"#39798C",color:"white", marginTop:"50px", width:"200px", marginLeft:"25px" }}>Create Story</Button>
            </Link>
          
        </Container>
    )
})