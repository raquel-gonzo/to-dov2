import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [list, setList] = useState([]); 

  const submitHandler = (e, task) => {
    e.preventDefault();
    setList([...list, task]);
    console.log(task);
  }

  // useEffect(() => {

  // })

  return (
    <div className="App">
      <Form submitHandler={submitHandler} />
      <List list={list} />
    </div>
  );
}

export default App;
