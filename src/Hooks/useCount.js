import {useState} from "react";

export default function Usecount(){
    const[count, setCount]=useState(0);

    const increment=()=>{
        setCount((prev)=>++prev)
    };

    const decrement=()=>{
        setCount((prev)=>--prev)
    };

    const reset=()=>{
        setCount(0)
    };

    const updateValue=(value)=>{
        setCount(value)
    };

    return{count, increment, decrement, reset, updateValue}

};