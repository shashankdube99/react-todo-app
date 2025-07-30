import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementalParentCounter(by) {
        setCount(count + by)
    }

    function decrementalParentCounter(by) {
        setCount(count - by)
    }

    function resetButton() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementalParentCounter} decrementMethod={decrementalParentCounter} />
            <CounterButton by={2} incrementMethod={incrementalParentCounter} decrementMethod={decrementalParentCounter} />
            <CounterButton by={5} incrementMethod={incrementalParentCounter} decrementMethod={decrementalParentCounter} />
            <button
                className="resetButton"
                onClick={resetButton}
            >Reset</button>
        </>
    )
}

