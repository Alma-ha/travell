import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props{
    inverted?: boolean;
    content: string;
}

export default function LoadingComponents({inverted=true, content="Loading..."}: Props){
    return(
        <Spinner animation={"border"} role={"status"}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
}