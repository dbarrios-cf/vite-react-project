import { ChangeEvent, useState } from 'react';

function App() {
  const [fieldValue, setFieldValue] = useState('');
  const [tags, setTags] = useState(['happy', 'cheerful']);

  let stringTags = ' ';

  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];

    if(index + 1 === tags.length) {
      stringTags += ` and ${tag}.`;
    } else {
      stringTags += ` ${tag},`;
    }
  }

  if(tags.length === 0) {
    stringTags = "n't."
  }

  const handleAddClick = () => {
    setTags([...tags, fieldValue]);
    setFieldValue('');
  }

  const handleRemoveClick = () => {
    setTags(tags.filter((tag) => tag !== fieldValue));
    setFieldValue('');
  }

  const handleChange = (e) => {
    const {value} = e.target;
    setFieldValue(value);
  }

  return (
    <div>
      <h1>Hi our company is{stringTags}</h1>
      <input type="text" name="attribute" id="attribute" value={fieldValue} onChange={handleChange}/>
      <button onClick={handleAddClick}>Add element</button>
      <button onClick={handleRemoveClick}>Remove element</button>
    </div>
  );
}

export default App;
