import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import { get } from 'utils/api';

import 'App.scss';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    get('test_get_url', {name: "lasse_nordahl"})
      .then(function(response) {

      })
      .catch(function(error) {
        console.log('error: ', error)
      });
  });

  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h3>
          This is the HackUCI React Port Website
        </h3>
        <h3>{count}</h3>
        <Button style={{marginTop: '30px'}} onClick={() => setCount(count + 1)}> Lets gettit</Button>
      </div>
    </div>
  );
}

export default App;
