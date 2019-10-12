import React from 'react';
import Logo_uaomon from './Images/Logo_uaomon.svg';
import Start from './(1)Home/Start.js';
import Selection from './(2)Fight/Selection.js';
import Fight from './(2)Fight/Fight.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <header className="App-content-home">
      {/* <Start></Start>    */}
      {/* <Selection></Selection> */}
      <Fight></Fight>
      </header>
       
    </div>
  );
}

export default App;
