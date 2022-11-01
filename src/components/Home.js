import React, { Component } from 'react';
import img from './assets/images/burns.png'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div>
          <h1>Home</h1>
          <img src={img} style={{width:"300px"}}/>
      </div>
    )
  }
}
