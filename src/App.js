import React from 'react';
import { BrowserRouter } from 'react-router-dom/dist';
import './App.css';
import Main from './layouts/Main/Main'

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
