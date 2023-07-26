import React, {useState} from 'react'
function Counter(){
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prev=>[...prev, "+"])
    }

    function addMinus(){
        setArr(prev => [...prev, "-"])
    }
    return(
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </div>
    )
}

export default Counter