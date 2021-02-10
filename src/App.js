import { useState } from 'react';
import './App.css';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import Header from './components/Header';
import data from './Data';

function App() {
  const [cartItems, setCartItems] = useState(data);
  // console.log(cartItems, 'what is in data');
  
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems 
        /* (items) is passing all the objects in data.js */
          items={cartItems} setCartItems={setCartItems}
        />
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}

export default App;
