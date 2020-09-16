import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Home from './layout/home/Home.jsx';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Home/>
      </LanguageProvider>
    </div>  
  );
}

export default App;
