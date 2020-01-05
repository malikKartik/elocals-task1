import React, { Component } from 'react';
import './App.css';
import products from './data/products'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/body/body'
import Footer from './Components/Footer/Footer'

class App extends Component {
  state = {
    products:products
  };
  render() {
      
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Body products = {this.state.products}/>
        <Footer/>
      </div>
    );
  }
}

export default App;