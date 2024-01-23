import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import OutcomeOne from './components/OutcomeOne';
import Message from './components/Message';
import WritingAnalysis from './components/WritingAnalysis';
import References from './components/References';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <OutcomeOne />
    <Message />
    <WritingAnalysis />
    <References />
  </React.StrictMode>
);