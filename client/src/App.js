import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  // const [list, setList] = useState([]); 

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
