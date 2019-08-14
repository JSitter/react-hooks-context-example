import React from 'react';
import {CounterProvider} from './store/simpleContext';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </div>
  );
}

export default App;
