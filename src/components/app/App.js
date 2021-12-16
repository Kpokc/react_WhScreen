import React, { Component } from 'react';

import DbApi from '../services/dbapi-service'

import NavBar from '../navbar';
import OrderCards from '../order-cards'

import './app.css';

export default class App extends Component {

  dbapi = new DbApi();

  state = {
    data: [
      {id: 1, title: "Pick:" ,fn: this.dbapi.getAllPeople },
      {id: 2, title: "Receipt:" ,fn: this.dbapi.getAllPlanets },
      {id: 3, title: "Shipment:" ,fn: this.dbapi.getAllStarships },
      {id: 4, title: "Collection:" ,fn: this.dbapi.getAllPeople },
      {id: 5, title: "Transfer:" ,fn: this.dbapi.getAllPlanets },
      {id: 6, title: "Other:" ,fn: this.dbapi.getAllStarships },
    ],
    orders: []
  }

  componentDidMount(){
    const { data } = this.state;
    // Render main screen
    this.setState({
      data: this.data,
      orders: data.map(({ id, title, fn }) => {
                return (
                    <OrderCards
                    key={id}
                    title={title}
                    getData = {fn}/>
                );
              })
    });
  };

  // create function to use for update state on request
  componentDidUpdate() {
    this.setState({
      data: this.data,
      orders: (({ id, title, fn }) => {
                return (
                    <OrderCards
                    key={id}
                    title={title}
                    getData = {fn}/>
                );
              })
    });
  };


  render(){

    const { data, orders } = this.state;

    const d = orders.map((el) => {
      console.log(el.key);
    });
    
    
    
    return (
      <div className='container-fluid'>
        <NavBar />
        <div className="row">

            { orders }

        </div>
      </div>
    );
  }
};