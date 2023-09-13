import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import LoginButton from './Auth/login';

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost/api/v1')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
      <div>
        <LoginButton />
      </div>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    </>
  );
}

export default App;
