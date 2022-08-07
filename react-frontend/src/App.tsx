import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Homepage from "./components/Homepage";
import Aircrafts from "./features/aircrafts/Aircrafts";
import Fighters from "./features/fighters/Fighters";
import ResearchAgreement from "./features/researchAgreement/ResearchAgreement";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='ships/aircrafts' element={<Aircrafts />} />
          <Route path='ships/aircrafts/fighters' element={<Fighters />} />
          <Route path='/researchAgreement' element={<ResearchAgreement />} />
        </Routes>
      </BrowserRouter>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
