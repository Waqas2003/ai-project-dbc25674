import React from 'react';

function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {Object.keys(cart).map((productId) => (
          <li key={productId}>
            {cart[productId].name} x {cart[productId].quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;