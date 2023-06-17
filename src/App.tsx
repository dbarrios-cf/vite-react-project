import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <button onClick={handleClick}>Toggle Visibility</button>
      {isVisible ? (
        <div>
          <h1>Yehaaaw!</h1>
        </div>
      ) : null}
    </>
  );
}

export default App;
