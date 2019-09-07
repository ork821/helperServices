import React from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Main from "./main/Main";
import Header from "./Header/Header";


const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Main/>
          </div>
      </BrowserRouter>

  );
}

export default App;
