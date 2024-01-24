import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeOne from './components/OutcomeOne';
import OutcomeTwo from './components/OutcomeTwo';
import OutcomeThree from './components/OutcomeThree';
import References from './components/References';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeOne />
    <OutcomeTwo />
    <OutcomeThree />
    <References />
  </React.StrictMode>
);