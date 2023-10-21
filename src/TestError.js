import { useState } from "react";
import './App.css';

function TextError(){
    const[hasError, setHasError]=useState(false);
    
    if(hasError){
        throw new Error("An Error is found");
    };

    return(
        <div>
            <h3>please comfirm our Error Boundary Here</h3>
            <button onClick={()=>setHasError(true)} className="boundary">Checking Error Boundary</button>
        </div>
    )
};

export default TextError;