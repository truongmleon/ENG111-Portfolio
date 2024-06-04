import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeOne from './components/OutcomeOne';
<<<<<<< HEAD
import OutcomeThree from './components/OutcomeThree';
=======
import OutcomeTwo from './components/OutcomeTwo';
import OutcomeThree from './components/OutcomeThree';
import OutcomeFour from './components/OutcomeFour';
>>>>>>> parent of 3589fbf (eng111 transition)
import Conclusion from './components/Conculsion';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeThree />
    <OutcomeOne />
<<<<<<< HEAD
=======
    <OutcomeTwo />
    <OutcomeThree />
    <OutcomeFour />
>>>>>>> parent of 3589fbf (eng111 transition)
    <Conclusion />  
  </React.StrictMode>
);