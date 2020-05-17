import React, { Component } from 'react';

export default class Cell extends Component{
    constructor(value){
        super()
        console.log(value)
        this.state = {
            color: Object.values(value)[0]
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}