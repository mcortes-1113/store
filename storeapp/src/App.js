import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css';

function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </Router>
    
  );
}

export default App;
