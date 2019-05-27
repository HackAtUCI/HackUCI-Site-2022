import React, { useEffect, useState } from 'react';
import './App.scss';

import { FeedbackForm } from './app/components/FeedbackHooks/FeedbackForm'

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h3>
          This is the HackUCI React Port Website
        </h3>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
