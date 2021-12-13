import React, { Component } from 'react';

import NavBar from '../navbar';

import './app.css';

export default class App extends Component {

  render(){
    
    return (
      <div className='container-fluid'>
        <NavBar />
        <h1>Hello!</h1>
      </div>
    );
  }
};