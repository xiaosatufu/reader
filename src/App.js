import React, { Component } from "react";
import { Provider } from "react-redux";

// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";
import Search from "./pages/searchPage";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <div className="App">
            <Header />
            <Route path="/search" exact component={Search} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
