import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { getannouncements } from "./firebase/firebase";
import { db } from './firebase/firebase-condig';

function App() {
  useEffect(() => {
    getannouncements(db).then((res) => {
      console.log(res[0]);
    },[])
  },[])
  return (
    <div className="App">
      <header className="App-header">
  
      </header>
    </div>
  );
}

export default App;
