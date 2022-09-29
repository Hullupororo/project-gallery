import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App1 from './App1';

const container = document.getElementById('root');

ReactDOMClient.hydrateRoot(
  container,
  <BrowserRouter>
    <App1 {...window.initState} />
  </BrowserRouter>,
);
