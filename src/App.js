import React from 'react';
import './App.css';
import Sidebar from "./Sidebar/sidebar";
import Feed from "./Feed/feed";
import Widgets from "./Widgets/widgets";

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
