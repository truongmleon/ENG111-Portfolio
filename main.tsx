import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import Author from './components/Author';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <Author />
  </React.StrictMode>
);
