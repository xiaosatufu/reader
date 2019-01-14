import React, { Component } from "react";
import { Provider } from "react-redux";

// import {BrowserRouter,Route} from 'react-router-dom'
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./common/header";
import Search from "./pages/searchPage";
import Detail from "./pages/detailPage"
import Home from "./pages/homePage"

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <div className="App">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/detail" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
