import React, { Component } from 'react'
import loading from '../Walk.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt={loading} className="self-center m-auto"/>
      </div>
    )
  }
}

export default spinner