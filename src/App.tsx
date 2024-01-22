import React from 'react';
import logo from './momence-logo.svg';
import logoTypography from './momence-logo-typography.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-logo-container" href='https://momence.com/'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logoTypography} className="App-logo-typography" alt="logo-typography" />
        </a>
        <h1 className='App-title'>
          Currency converter
        </h1>
        <p className='App-description'>Tech task assignment</p>
        <div style={{ display: 'block', width: '50vw', height: '20vh', background: 'var(--white)', borderRadius: '24px', color: 'black' }}>calculator goes here</div>
      </header>
      <section className='App-content'>
        <div style={{ display: 'block', width: '50vw', height: '40vh', background: 'var(--white-smoke)', borderRadius: '24px' }}>Table goes here</div>
      </section>
    </div>
  );
}

export default App;
