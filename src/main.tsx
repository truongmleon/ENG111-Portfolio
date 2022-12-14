import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Outline from './components/Outline';
import Author from './components/Author';
import ContextExigence from './components/ContextExigence';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Outline />
    <Author />
    <ContextExigence />
  </React.StrictMode>
);
