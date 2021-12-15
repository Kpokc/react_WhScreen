import React, { Component } from 'react';

import CardItems from '../card-items'
import './order-cards.css'


export default class OrderCards extends Component {

    state = {
        orderList: null
    }

    onError = (err) => {
        this.setState({
        error: true,
        loading: false,
        });
    };

    // Call data from DB
    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((orderList) => {
                this.setState({
                    orderList: orderList
                });
            })
            .catch(this.onError);
    }

    render() {

        const { orderList } = this.state;
        const { title } = this.props;

        // Render Orders
        if (orderList){
            return (
                <CardItems 
                    orderList={orderList}
                    title={title}/>
            );
        }
        else {

            return null;
        }
    }
}