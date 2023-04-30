import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
            const quantity = item.quantity;
            
            // add the item to delete to storage, so that it will be re-added to the quantity
            // of the product next time the ProductPage is opened.
            const index = deletedItems.push(item);
            localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
            deletedItems = JSON.parse(localStorage.getItem("deletedItems"));
		    deletedItems[index - 1].quantity = 1;
            localStorage.setItem("deletedItems", JSON.stringify(deletedItems));

            if (quantity > 1) { //check to see quantity, if > 1 remove 1 from cart, if 1 then remove entire item from cart
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
                <div className="col-4">{items.map(item => <div key={item.id}>{item.model}</div>)}</div>
                <div className="col-4">{items.map(item => <div key={item.id}>{item.quantity}</div>)}</div>
                <div className="col-4">{items.map(item => <div key={item.id}>${item.price * item.quantity}</div>)}</div>
                <hr />
                <div className="row">
                    <h5 className="col-4">Total:</h5>
                    <div className="col-4"/>
                    <div className="col-4">${total}</div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
