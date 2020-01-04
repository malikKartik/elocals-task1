import React, { Component } from 'react';
import './App.css';
import products from './data/products'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/body/body'

class App extends Component {
  state = {
    products:products
  };
  

  textChangeHandler = (event) =>{
    
  }
  

  
  render() {
    // const chars = this.state.text.split('').map(ch=>{
    //   return <Char character={ch}></Char>
    // })
    
      
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Body products = {this.state.products}/>
      </div>
    );
  }
}

export default App;