import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Filter from './Filter';
import { todoContext } from './context-manager';
import FetchData from './fetchData';

function App() {
  const [todo, setTodo] = useState([]);
  const dataUrl = 'http://localhost:9000/data';

  let initial = window.location.hash ? window.location.hash : "#1";
  
  const [hash, setHash] = useState(initial);

  useEffect(() => {
    FetchData('get', setTodo, dataUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <todoContext.Provider value={{todo, setTodo, hash, setHash, dataUrl}}>
      <Input />
      <List />
      <Filter />
    </todoContext.Provider>
  );
}

export default App;