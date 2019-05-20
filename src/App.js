import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h3>
          This is the HackUCI React Port Website
        </h3>
        <Button style={{marginTop: '30px'}}> Lets gettit</Button>
      </div>
    </div>
  );
}

export default App;
