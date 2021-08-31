import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {

      const cart = useSelector(state => state.cart);

      const { cartItems } = cart;

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">Telal
            </Link>
        </div>
        <div>
        <Link to="/cart">Cart</Link>
        {cartItems.length > 0 && (
          <span className="badge">{cartItems.length}</span>
        )}
        <Link to="/sign in">Sign In</Link>
      </div>
    </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Copyright © 2021, Telal Online Store.</footer>
</div>  
</BrowserRouter>
    );
}

export default App;
