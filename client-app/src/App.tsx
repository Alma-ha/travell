import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/travels').then(response => {
     console.log(response);
    setTravels(response.data);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
      <ul>
          {travels.map((travel:any) => (
            <li key={travel.id}>
              {travel.title}
            </li>
          ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
