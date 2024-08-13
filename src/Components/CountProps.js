import React from 'react';


function CountProps(props){
console.log(props);

    return(
        <>
            <h1>Count: {props.value}</h1>
            <button onClick={() => props.countFun(props.value + 1)} >Increment</button>
            <button onClick={() => props.countFun(props.value - 1)}>Decrement</button>
        </>
    )
}

export default CountProps;