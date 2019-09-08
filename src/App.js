import React from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <Header/>
                  <Main/>
              </div>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
