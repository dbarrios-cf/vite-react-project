import { useState } from 'react';
import produce from 'immer';

function StateGame() {
  const [nameInput, setNameInput] = useState('');
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Pepe',
    }
  });

  const handleClick = () => {
    setGame(produce((draft) => {
      draft.player.name = nameInput;
    }))
  }

  function handleNameInputChange(e : React.FormEvent<HTMLInputElement>) {
    setNameInput((e.target as HTMLInputElement).value);
  }

  return (
    <>
    <h1>Game</h1>
      <div>
        <h2>Player: {game.player.name}</h2>
        <p>Change name?</p>
        <input 
          type="text" 
          name="name" 
          id="name" 
          onChange={handleNameInputChange} 
          value={nameInput} />
        <button onClick={handleClick}>Update</button>
      </div>
    </>
  );
}

export default StateGame;