import { useState } from "react";
import Usecount from "../Hooks/useCount";
import { Link } from "react-router-dom";
import './counter.css';

function Counter(){
const {count, increment, decrement, reset, updateValue}=Usecount()

const[updateCount, setUpdateCount]=useState("")

const handleChange=(event)=>{
    setUpdateCount(event.target.value);
    (event.target.value)=updateCount

};

const handleClick=()=>{
    updateValue(+updateCount);
    setUpdateCount("")
}

return(
    <div className="btn">
        <div className="container">
        <h1 id="title">Hey! Welcome to Counter-App page</h1>
        <h2 id="current">current Value : {count}</h2>
        <button onClick={increment} id="incr" className="btn-App" >increment</button>
    
        <button onClick={decrement} id="decr" className="btn-App">decrement</button> 
        
        <button onClick={reset} id="res" className="btn-App">reset</button> 
        
        <button onClick={handleClick} id="update"> setValue</button>
        <input type="number" value={updateCount} onChange={handleChange}/>
        
         <h2><Link to="/" className="btn-App" id="home">Home Page</Link></h2>
         </div>
    </div>
)

}

export default Counter;