import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({value}) => {

 const [counter, setCounter] = useState(value);

 const sumar = () => {
    setCounter(counter + 1);
 }

 const restar = () => {
    setCounter(counter - 1);
 }

 const reset = () => {
    setCounter(value);
 }

  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        
        {/* Las funciones al momento de llamarlas se deben pasar como una arrow function */}
        <button onClick={sumar}>+1</button>
        <button onClick={restar}>-1</button>
        <button aria-label="btn-reset" onClick={reset}>Reset</button>


    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}