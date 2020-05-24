import React, { Component } from 'react';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  // every row map through its vals to create an array of <div className="call"> JSX
  genRow = (vals) => {
   
    vals.map(val => <Cell value={val} />) 
    // to specify our Cell component should have a value prop
  }
  
  genMatrix = () => {
    //console.log(this.props.values)
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  // shows our Matrix component 
  // inside we invoke this.genMatrix() which is an instance method that maps this.props.values to an array of JSX
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  }) ()
}