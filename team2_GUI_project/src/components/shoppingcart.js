import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Shopping cart. Handles displaying price totals of items in cart, and removing items from the cart.
// Main dev: Gavin Doyle

function ShoppingCart() {
    const [items, setItems] = useState([]);

    //delete items from shopping cart
    const delItem = (itemId) => {
        const item = items.find(item => item.id === itemId);

        var deletedItems = [];

        if (localStorage.getItem("deletedItems") != null)
        {
            deletedItems = JSON.parse(localStorage.getItem("deletedItems"));
        }

        if (item) {

            const index = deletedItems.push(item);
            localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
            deletedItems = JSON.parse(localStorage.getItem("deletedItems"));
		    deletedItems[index - 1].quantity = 1;
            localStorage.setItem("deletedItems", JSON.stringify(deletedItems));

          const quantity = item.quantity;
          if (quantity > 1) { //check to see quantity, if > 1 remove 1 quantity from cart, if 1 then remove entire item from cart
            const updatedItems = items.map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item);
            setItems(updatedItems);
            localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
          } 
          else {
            const updatedItems = items.filter(item => item.id !== itemId);
            setItems(updatedItems);
            localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
          }
        }
      }
      


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('shoppingCart'));
        if (data) {
            setItems(data);
        }
    }, []);

    console.log(JSON.parse(localStorage.getItem("shoppingCart")));


    var total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
        console.log("Total: " + total);
    }

    return (
        <div className="container">
            <h1 className="col-10">Shopping Cart</h1>
            {/* main component displaying items in cart */}
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={require("../data/images/" + item.image + ".png")} className="card-img-top" alt={item.image}/>
                            <div className="card-body">
                                <h3 className="card-title">{item.model}</h3>
                                <p className="card-text">Price: {item.price}</p>
                                <p className="card-text">Quantity: {item.quantity}</p>
                                <button className="btn btn-primary" onClick={() => delItem(item.id)}>Remove From Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* table at bottom of screen displaying total */}
            </div>
            <div className='row'>
                <h5 className="col-4">Item</h5>
                <h5 className="col-4">Quantity</h5>
                <h5 className="col-4">Price</h5>
            </div>
            <div className="row">
                <div>
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
                            <td><strong>Subtotal:</strong></td>
                            <td><strong>${total.toFixed(2)}</strong></td>
                        </tr>
                    </tfoot>
                </table>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
