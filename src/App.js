import React from 'react';
import './App.css';
import Sidebar from "./sidebar";
import Feed from "./feed";
import Widgets from "./widgets";

function App() {
  return (
    // BEM 
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
