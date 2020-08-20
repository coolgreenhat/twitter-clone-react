import React from 'react';
import './App.css';
import Sidebar from "./sidebar";


function App() {
  return (
    // BEM 
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
