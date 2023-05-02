import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Check-out page. Handles the "shipping information" and shows invoice when done.
// Main dev: Gavin Doyle

function ChcekOut() {
    const [items, setItems] = useState([]);
    const [showInvoice, setShowInvoice] = useState(false);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('shoppingCart'));
        if (data) {
            setItems(data);
        }
    }, []);

    //get totals
    var total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }

    const confirmShipping = (event) => {
        event.preventDefault(); //prevents component from being reloaded and messing stuff up
    }

    const handleCheckout = () => {
        setShowInvoice(true);

    };
    const [shippingMethod, setShippingMethod] = useState("UPS Ground");
    const shippingButtonClicked = (event) => {
        setShippingMethod(event.target.value);
    };
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const textInput = (event) => {
        const { name, value } = event.target;
        //the ...shippingInfo is using a spread operator. Super handy tool that lets us copy the entire object then change part of it? Thats what I read
        //im not fully sure how it works but I saw an example of it online and it works- going to try and figure it out more because its super neat
        setShippingInfo({ ...shippingInfo, [name]: value });
    };


    return (

        <div className="container">
           {!showInvoice ? <h1 className="col-10">Shopping Cart</h1>: <h1>Thank You For Your Order!</h1>} 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.model}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            {}
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total + Tax:</strong></td>
                        <td><strong>${total.toFixed(2)}</strong></td>
                        <td>
                            {!showInvoice ? <button onClick={handleCheckout}>Check Out</button> :null}
                        </td>
                    </tr>
                </tfoot>
            </table>
            {!showInvoice ? <div className='checkoutscreen'>
                <div className="row">
                    <h4>Select Shipping Method</h4>
                    <label>
                        <input
                            type="radio"
                            value="UPS Ground"
                            checked={shippingMethod === 'UPS Ground'}
                            onChange={shippingButtonClicked}
                        />
                        UPS Ground
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="UPS Air"
                            checked={shippingMethod === 'UPS Air'}
                            onChange={shippingButtonClicked}
                        />
                        UPS Air
                    </label>
                </div>

                <div className="center">
                    <h4>Input Shipping Information</h4>
                    <form onSubmit={confirmShipping}>
                        <input className="row col-3 mb-2"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={shippingInfo.name}
                            onChange={textInput}
                        />
                        <input className="row col-3 mb-2"
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={shippingInfo.address}
                            onChange={textInput}
                        />
                        <input className="row col-3 mb-2"
                            type="text"
                            name="city"
                            placeholder="City"
                            value={shippingInfo.city}
                            onChange={textInput}
                        />
                        <input className="row col-3 mb-2"
                            type="text"
                            name="state"
                            placeholder="State"
                            value={shippingInfo.state}
                            onChange={textInput}
                        />
                        <input className="row col-3 mb-2"
                            type="text"
                            name="zip"
                            placeholder="Zip"
                            value={shippingInfo.zip}
                            onChange={textInput}
                        />
                    </form>
                </div>
            </div> : <div>
                <h3>Shipping Information:</h3>
                <div className="row">
                    <div>Name: {shippingInfo.name}</div>
                    <div>Address: {shippingInfo.address}</div>
                    <div>City: {shippingInfo.city}</div>
                    <div>State: {shippingInfo.state}</div>
                    <div>Zip: {shippingInfo.zip}</div>
                    <div>Shipping Method: {shippingMethod}</div>
                    </div>
            </div>}
        </div>
    );
}
export default ChcekOut;
