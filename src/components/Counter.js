import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByOne, decrementByOne } from '../store/actions/CounterAction';

function Counter() {
    //const [counter, setCounter] = useState(0);
    const counterValue = useSelector(state => state.counterReducer.counter);
    const dispatch = useDispatch();

    const increment = () => {

        /* dispatch({
            type: 'increment'
        }) */

        dispatch(incrementByOne())
    }
    const decrement = () => {

        /* dispatch({
            type:'decrement'
        }) */

        dispatch(decrementByOne())
    }

    return (
        <div>
            <h3>Counter: {counterValue}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;