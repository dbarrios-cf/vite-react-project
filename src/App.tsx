import { ChangeEvent, useState } from 'react';
import produce from 'immer';

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false},
    { id: 2, title: 'Bug 2', fixed: false}, 
  ]);

  const handleClick = (id : Number) => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
    setBugs(produce((draft) => {
      const bug = draft.find(bug => bug.id === id);
      if(bug) bug.fixed = true;
    }))
  }

  return (
    <div>
      <h1>Bugs:</h1>
      {bugs.map((bug) => (
        <div className="bug" id={bug.id.toString()}>
          <h2>Bug: {bug.title}</h2>
          <p>status: {bug.fixed ? 'Fixed!' : 'Requires fixing'}</p>
          <button onClick={() => {handleClick(bug.id)}}>Bug fixed</button>
        </div>
      ))}
    </div>
  );
}

export default App;
