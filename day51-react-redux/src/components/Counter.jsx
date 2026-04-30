import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { reset } from '../redux/counterSlice'

function Counter() {
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <p>Counter Component</p>
        <h4>{counterValue}</h4>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter