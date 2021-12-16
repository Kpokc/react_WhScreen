import React, { Component } from 'react';

import DbApi from '../services/dbapi-service'

import NavBar from '../navbar';
import OrderCards from '../order-cards'

import './app.css';

export default class App extends Component {

  dbapi = new DbApi();

  state = {
    data: [
      {id: '1XDTW1', title: "Pick:" ,fn: this.dbapi.getAllPeople },
      {id: '2XDTW2', title: "Receipt:" ,fn: this.dbapi.getAllPlanets },
      {id: '3XDTW3', title: "Shipment:" ,fn: this.dbapi.getAllStarships },
      {id: '4XDTW4', title: "Collection:" ,fn: this.dbapi.getAllPeople },
      {id: '5XDTW5', title: "Transfer:" ,fn: this.dbapi.getAllPlanets },
      {id: '6XDTW6', title: "Other:" ,fn: this.dbapi.getAllStarships },
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
                    getData = {fn}
                    updateID={id}
                    updateData={this.updateData.bind(this)}/>
                );
      })
    });
  }

  updateData(uid){
    console.log(uid);
    const { orders } = this.state;
    let res = orders.map((el) => {
      if (uid == el.key){

          return (
            <OrderCards
                      key={el.key}
                      title={el.props.title}
                      getData = {el.props.getData}
                      updateID={el.props.updateID}
                      updateData={this.props.updateData}/>
          );
      };
    });

    res = res.filter(function( element ) {
        return element !== undefined;
    });

    console.log(res);
    
  }
  

  render(){

    const { orders } = this.state;

    // const r = orders.map((el) => {
    //   console.log(el.key)
    // })

    //console.log(orders.key)
    
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