import { useState } from "react";

interface cartProps {
  cartItems: string[],
  onClear: () => void
}

function Cart({cartItems, onClear}: cartProps) {
  return (
  <>
  <div>Cart:
    <ul>
      {cartItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
  <button onClick={onClear}>Clear Cart</button>
  </>)
}

export default Cart;