import React, { Component } from 'react'

// class Compo extends React.Component
class Compo extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({count: this.state.count + 1})} >Increment</button>
            </>
        )
    }
}

export default Compo;