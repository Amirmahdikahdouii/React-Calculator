import React, { Component } from 'react';

class ButtonsComponent extends Component {

  render() {
    let prop = [
      [
        'AC',
        'DEL',
        '-'
      ],
      [
        '7',
        '8',
        '9',
        '*',
      ]
    ]
    let result = prop.map((row, index) => {
      return (
        <div className='row' key={index}>
          {row.map((button, i) => {
            return <button className='btn btn-danger' key={i}>{button}</button>;
          })}
        </div>
      )
    })
    console.log(result)
    return (
      <div className='container'>
        <div className='button-container'>
          {result}
        </div>
      </div>
    )
  }
}

export default ButtonsComponent;
