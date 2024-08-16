import React from 'react'

const PropsChild = (props) => {
    console.log(props);
    
  return (
    <div>
      <h2>Child Components</h2>
      {props.Abc.map((items, index) =>{
        return(
            <>
                <h1>{items.userId}</h1>
                <span>{items.id}</span>
            </>
        )
      })}
    </div>
  )
}

export default PropsChild
