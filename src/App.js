import logo from './logo.svg';
import './App.css';
import getTokenFromCookie from './GetCookie';
import setTokenToCookie from './SetCookie';
import React, { useEffect } from 'react';

//token will be injected from env
const JWTToken = 'token goes here';

function App() {
  useEffect(() => {

    const setTokenData = async () => {
      const setToken = setTokenToCookie('uniphi-token', JWTToken, 4);
      console.log(setToken)
    }
    setTokenData();

    const fetchTokenData = async () => {
      const token = getTokenFromCookie('uniphi-token');
      console.log(token)
    }
    fetchTokenData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
