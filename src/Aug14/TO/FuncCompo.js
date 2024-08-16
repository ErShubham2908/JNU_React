import React, { useState } from 'react'
import Home from './Home';
import Error from './Error';

function FuncCompo() {
    const [toggleVal, setToggleVal] = useState(10);
    console.log(toggleVal);
    
  return (
    <div>
      <h1>Hello</h1>
      {/* <button onClick={() => setToggleVal(!toggleVal) }>Click for toggle</button> */}
      <button onClick={() => setToggleVal(!toggleVal) }>Login</button>
      { toggleVal ? <Home /> : <Error />}
    </div>
  )
}

export default FuncCompo
