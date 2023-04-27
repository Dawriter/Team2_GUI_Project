import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ShoppingCart() {

    const oragami = [
        { "model": "model1", "price": 10, "id": "1", "image": "./cinnimon.png" },
        { "model": "model2", "price": 20, "id": "2", "image": "./cinnimon.png" },
        { "model": "model3", "price": 30, "id": "3", "image": "./cinnimon.png" },
        { "model": "model4", "price": 40, "id": "4", "image": "./cinnimon.png" }
    ];

    const [oragamiset, setOragami] = useState(oragami);
    localStorage.setItem("shoppingCart", JSON.stringify(oragami));



    const [items, setItems] = useState([]);

    const delItem = (itemId) => {

        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
        localStorage.setItem("shoppingCart", JSON.stringify(updatedItems));
        console.log("New Storage: " + localStorage.getItem("shoppingCart"))
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
        total += items[i].price;
        console.log("Total: " + total);
    }

    return (
        <div className="container">
            <h1 className="col-10">Shopping Cart</h1>

            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={require(`${item.image}`)} className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">{item.model}</h3>
                                <p className="card-text">Price: {item.price}</p>
                                <button className="btn btn-primary" onClick={() => delItem(item.id)}>Remove From Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='row'>
            <h5 className="col-4">Item</h5>
            <h5 className="col-4">Price</h5>
            </div>
            <div className="row">
                <div className="col-4">{items.map(item => <div key={item.id}>{item.model}</div>)}</div>
                <div className="col-4">{items.map(item => <div key={item.id}>{item.price}</div>)}</div>             
                <hr/>
                <div className="row">
                    <h6 className="col-4">Total:</h6>
                    <div className="col-4">{total}</div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
