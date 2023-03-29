import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}


function Counter (){
  const [Count, setCount] = useState(0);
  const increaseCount= () =>  setCount(Count + 1);
  const decreaseCount= () =>  setCount(Count - 1);
  // {
  //   const newCount = Count + 1
  //   setCount(newCount);
  // }
  return (
    <div className='Data-1'>
      <h1>Number: {Count} </h1>
      <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
