import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button/Button';
import ListGroup from './components/ListGroup/ListGroup';
import Like from './components/Like/Like';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <Like
      onLike={() => console.log('Liked :)')}
      onDislike={() => console.log('Disliked :(')}
    />
  );
}

export default App;
