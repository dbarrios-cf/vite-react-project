import { useState } from 'react';

function Pizza() {
  const [newTopping, setNewTopping] = useState('');
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Pepperoni', 'Mushrooms', 'Chilli Flakes']
  });

  const handleClick = () => {
    const updatedToppings = [...pizza.toppings, newTopping];
    setPizza({...pizza, toppings: updatedToppings});
  }

  function handleToppingInputChange(e : React.FormEvent<HTMLInputElement>) {
    setNewTopping((e.target as HTMLInputElement).value);
  }

  return (
    <>
    <h1>Your Pizza:</h1>
      <div>
        <h2>Pizza: {pizza.name}</h2>
        <h3>Toppings:</h3>
        <div>
          {pizza.toppings.map((topping) => (
            <p>{topping}</p>
          ))}
        </div>
        <h3>Add Topping</h3>
        <input 
          type="text" 
          name="name" 
          id="name" 
          onChange={handleToppingInputChange} 
          value={newTopping} />
        <button onClick={handleClick}>Update</button>
      </div>
    </>
  );
}

export default Pizza;