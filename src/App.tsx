import React from 'react';



// importing components when they are not exported with export default 
import {View} from "./components/View"

function App() {
  return (
    <div className="App">
      <View name="Tony" />
    </div>
  );
}

export default App;
