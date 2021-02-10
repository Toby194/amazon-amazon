import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';

// items props is passing these objects:
//  const props = {
//   items: [
//     {}, {}, {}, {}
//   ]
// };

function CartItems({ items, setCartItems }) {
  // console.log(items, 'what is in the items');

  const changeQuantityItem = (e, index) => {
    // when we select a quantity on item, we pass it in here
    // Pass in the index
    // using the index we need to change the quantity to the selected one from select option
    // update the items state (in App.js)
    
    // console.log(e.target.value);
    // console.log('Index is', index);

    // Don't update the state without setter setCartItems function
    const newItems = [...items]; // this is creating deep/own copy
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  }

  const deleteItem = (indexToDelete) => {
    // console.log('Delete', index);
    
    // Filter out the items where the item index doesn't equal to the selected item item
    const newItems = items.filter((object, index) => {
      return index !== indexToDelete;
    });
    console.log(newItems);
    setCartItems(newItems)
  }
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => {
          // console.log(item, index 'what is in the item');
          return  <CartItem 
                    index={index}
                    item={item} 
                    key={index} 
                    changeQuantityItem={changeQuantityItem}
                    deleteItem={deleteItem}
                  />
        })}
      </div>
    </div>
  )
}

export default CartItems;
