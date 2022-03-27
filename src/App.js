import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import UserComponent from './userComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
     
        <UserComponent></UserComponent>
      </header>
    </div>
  );
}

export default App;
