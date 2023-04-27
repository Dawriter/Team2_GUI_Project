import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ChcekOut() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('shoppingCart'));
        if (data) {
            setItems(data);
        }
    }, []);

    console.log(JSON.parse(localStorage.getItem("shoppingCart")));

    //get totals
    var total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
        console.log("Total: " + total);
    }

    const handleCheckout = () => {
        //checkout function will go here
      };

    return (

        <div className="container">
      <h1 className="col-10">Shopping Cart</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.model}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td><strong>Total:</strong></td>
            <td><strong>${total}</strong></td>
            <td>
              <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    );
}

export default ChcekOut;
