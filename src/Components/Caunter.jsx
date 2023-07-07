import React, { useState } from 'react'

function Caunter() {
    const [counter,setCounter] =  useState(0)

    const onClickPilus = () => {
        setCounter(count => count +1);
    }
    const onClickReset = () => {
        setCounter(0);
    }

    const onClickMinus = () => {
        if(counter > 0){
            setCounter(count => count - 1)
        }
    }



  return (
    <div>

        <h1>{counter}</h1>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickPilus}>+</button>
        <button onClick={onClickReset}>Reset</button>
    </div>
  )
}

export default Caunter