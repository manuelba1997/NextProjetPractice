import { useState } from "react";

function CounterContainer(){
    let [count, setCount] = useState(0);

    return <div className="gridContainer">
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>Incremantar</button>
        <button onClick={()=> setCount(count >= 0 && count-1)}>Decrementar</button>
        <button onClick={()=> setCount(0)}>Reiniciar</button>
        {
         count >=6 ? <p>hasta aqui</p>: count<= 0 ? <p>Hasta aqui</p>: <p>Sigue Asi</p>
        }
    </div>

}
export default CounterContainer;
