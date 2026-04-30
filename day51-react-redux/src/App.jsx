import React from 'react'
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import {useDispatch} from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector(state => state.counter.value);

  const dispatch = useDispatch();
  return (  
    <div>
      <p>App Component</p>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button disabled={count === 0 } onClick={() => dispatch(decrement())}>Decrement</button>

      <Counter />
    </div>
  )
}

export default App