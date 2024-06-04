import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeOne from './components/OutcomeOne';
import OutcomeThree from './components/OutcomeThree';
import Conclusion from './components/Conculsion';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeThree />
    <OutcomeOne />
    <Conclusion />  
  </React.StrictMode>
);