import React from 'react';

import './card-items.css'

export const CardItems = ({ orderList, title }) => {

    // Render orders
    if (orderList) {
        const list = orderList.map(({id, name, ...Ordprops}) => {
            return (
                <div className="card border-primary mb-3 mt-3"
                    key={id}
                    onDoubleClick={() => window.alert("Double clicked!")} >
                    <div className="card-header">{title} {id}</div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text pt-1">{Ordprops.birthYear} Expeditors due in 11am to collect one pallet!</p>
                    </div>
                </div>
            );
        });

        // Return Columns in orders
        return (
            <div className="col">
                <h4 className="mt-3 text-center">{title}</h4>
                <div className='display-cards'>
                    {list}
                </div>
            </div>
        );
    };
}

export default CardItems;