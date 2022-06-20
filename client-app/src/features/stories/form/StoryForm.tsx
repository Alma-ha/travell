import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import {v4 as uuid} from 'uuid';


export default observer(function StoryForm(){
    
    const navigate= useNavigate();
    const {storyStore} =useStore();
    const {createStory, updateStory,
         loading, loadStory , loadingInitial} = storyStore;
    const {id} =useParams<{id: string}>();

    const [story, setStory] = useState({
        id: '',
        title: '',
        date: '',
        storydescription: '',
        category: '',
        city: '',
    });

    useEffect(() =>{
        if(id) loadStory(id).then(story => setStory(story!))
    }, [id, loadStory]);

  

    function handleSubmit(){
       if( story.id.length === 0) {
        let newStory={
            ...story,
            id:uuid()
        };
        createStory(newStory).then(() => navigate(`/stories/${newStory.id}`))
       }else{
        updateStory(story).then(() => navigate(`/stories/${story.id}`))
       }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value} = event.target;
        setStory({...story, [name]: value})
    }


        if(loadingInitial) return <LoadingComponents content="loading ..." />
    return(
        <Container style={{height:"430px",backgroundColor:"white",marginTop:"40px"}}>
            <Form onSubmit={handleSubmit} autoComplete='off' style={{paddingTop:"20px"}}>
                <Form.Control placeholder="Title" value={story.title} name='title' onChange={handleInputChange}/>
                <Form.Control as="textarea" placeholder="Description" value={story.storydescription} name='description' onChange={handleInputChange}/>
                <Form.Control placeholder="Category"value={story.category} name='category' onChange={handleInputChange}/>
                <Form.Control type='date' placeholder="Date" value={story.date} name='date' onChange={handleInputChange}/>
                <Form.Control placeholder="City" value={story.city} name='city' onChange={handleInputChange}/>
                <Button disabled={loading} style={{float:"right",marginLeft:"10px"}} type="submit">Submit</Button>
                
                <Link to='/stories'>
                <Button style={{float:"right"}} type="button">Cancel</Button></Link>
            </Form>
        </Container>
    )
})