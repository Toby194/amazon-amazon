import React from 'react';
import items from '../Data';
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {
	const getTotalPrice = () => {
		// setting up variable
		// initial total price to 0
		let totalPrice = 0;

		// loop through all the items in the cart
		// Add the price to the total price multiply by item quantity
		items.map(item => {
			totalPrice += item.price * item.quantity;
		});
		return totalPrice;
	};

	const getTotalItems = () => {
		let totalItems = 0;

		items.map(item => {
			totalItems += parseInt(item.quantity);
		});
		return totalItems;
	};

	return (
		<div className='CartTotal'>
			<h3>
				Subtotal ({getTotalItems()} items)
				<span className='CartTotal-price'>
					<NumberFormat
						value={getTotalPrice()}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'$'}
						decimalScale={2}
					/>
				</span>
			</h3>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default CartTotal;
