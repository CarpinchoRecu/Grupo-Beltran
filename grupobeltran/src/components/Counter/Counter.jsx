import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > -10) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0)
    }


    return (
        <div>
            <button onClick={increment}>sumar</button>
            <button onClick={decrement}>restar</button>
            <button onClick={reset}>resetear</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter