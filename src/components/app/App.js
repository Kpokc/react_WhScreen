import React, { Component } from 'react';

import DbApi from '../services/dbapi-service'

import NavBar from '../navbar';
import OrderCards from '../order-cards'

import './app.css';

export default class App extends Component {

  dbapi = new DbApi();

  render(){
    
    return (
      <div className='container-fluid'>
        <NavBar />
        <div className="row">

            <OrderCards 
            getData = {this.dbapi.getAllPeople}
            title={"Pick:"}/>

            <OrderCards 
            getData = {this.dbapi.getAllPlanets}
            title={"Receipt:"}/>

            <OrderCards 
            getData = {this.dbapi.getAllStarships}
            title={"Shipment:"}/>


            <OrderCards 
            getData = {this.dbapi.getAllPeople}
            title={"Collection:"}/>


            <OrderCards 
            getData = {this.dbapi.getAllPlanets}
            title={"Transfer:"}/>


            <OrderCards 
            getData = {this.dbapi.getAllStarships}
            title={"Other:"}/>

        </div>
      </div>
    );
  }
};