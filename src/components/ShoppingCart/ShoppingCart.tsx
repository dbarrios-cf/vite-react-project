import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1},
    ]
  });

  function handleClick() {
    setCart({
      ...cart,
      items: cart.items.map(
        (item) => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)
    });
  }

  return (
    <>
      <div>
        {cart.items.map(item => (
          <>
            <h3>{item.title}</h3>
            <span>{item.quantity}</span>
          </>
        ))}
      </div>
      <button onClick={handleClick}>+1</button>
    </> 
  )
}

export default ShoppingCart;