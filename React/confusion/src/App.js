import React, { Component } from 'react';
import logo from './logo.svg';
import {Container, Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import DISHES from './components/shared/dishes';
import Header from './header/header';
import Home from './components/HomeComponent';
import {Routes, Route, Redirect, BrowserRouter} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return(
      <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
              <Route path="*" element={<Home/>} />
            </Routes>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
