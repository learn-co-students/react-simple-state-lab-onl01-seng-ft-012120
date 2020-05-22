import React, { Component } from "react";

// console.log(this)
export default class Cell extends Component {
    // console;log(this.props)
    constructor(props) {
        super(props)
        this.state = {
            
            color : props.value
        }
    }

    handleClick = () => {
        this.setState({
            color : '#333'
        })
    }

    render() {
        return (
            <div className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            >


            </div>
        )
    }
    
}