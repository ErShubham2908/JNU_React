import React, { useState } from "react";
import CountProps from "./CountProps";

function Counter(){

    // what is Hook?
    // State Variable - useState Hooks
    // use to create a state variable in function based components;
    const [count, setCount] = useState(0);
    // const [name, setName] = useState("JNU");
    return(
        <>
            {/* <h1>Counter Value : {count}</h1> */}
            {/* <button onClick={()=> setCount(count + 1)}>Increment</button> */}
            {/* <button onClick={()=> setCount(count - 1)}>Decrement</button> */}
            {/* <button onClick={() => setCount(0)} >Zero</button> */}
<CountProps value= {count} countFun = {setCount} />
        </>
    )
 
}

// function UpdateName(){
//     const [name, setName] = useState('JNU');
//     return(
//         <>
//             <h1>Updated Name: {name}</h1>
//             <button onClick={() => setName("Jaipur")} >Update name</button>
//         </>
//     )
// }
export {Counter};



// let a = 10;
// a = 11
