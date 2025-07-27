import React from 'react'
import OrdersTable from '../Components/OrdersTable';

const Revenue = () => {
    return (
        <>
            <div className="revenue">
                <h1 className="r-h1">Our All Revenue </h1>

                <div className="revenue-box">
                    <OrdersTable />
                </div>
            </div>
        </>
    )
}

export default Revenue;
