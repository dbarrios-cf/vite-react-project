import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible ? (
        <Alert isDismissable={true} onClose={() => setAlertVisible(false)}>
          Click the X button to <strong>close</strong> this alert
        </Alert>
      ) : null}
      <Button onClick={() => setAlertVisible(true)}>Click to show alert</Button>
      <Button
        onClick={() => {
          return;
        }}
        style="secondary"
      >
        Secondary Button
      </Button>
      <Button
        onClick={() => {
          return;
        }}
        style="warning"
      >
        Warning Button
      </Button>
    </div>
  );
}

export default App;
