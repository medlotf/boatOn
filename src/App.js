import React from 'react';
import './styling/App.css';
import ListGroup from "./Components/listGroup"
import MesParrainages from "./Components/mesParrainages"
import ListParrainages from "./Components/listParrainages"

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center all">
        <div className="col-md-3">
          <ListGroup />
        </div>
        <div className="col-md-9 parr">
          <MesParrainages />
          <ListParrainages />
        </div>
      </div>
    </div>
  );
}

export default App;
