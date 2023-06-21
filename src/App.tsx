import { useState } from 'react';
import ExpandableText from './components/ExpandableText/ExpandableText';

function App() {
  return <ExpandableText shownChars={100}>Not only are we using the correct type for the children prop, but we have a lot less boilerplate code to be copy-pasting all over the place.
  You could also do this as a type instead of an interface; I prefer using type most of the time, but the differences are very mino
  View raw code as a GitHub Gist One thing to note is that, when we’re using type we have to type out the export default on a different line, at the bottom of the file.
  
  This is the same behavior as you’ll see if we were exporting a const </ExpandableText>
}

export default App;
