import React, { Component } from 'react'
import Logo from './Logo'
import Social from './Social'
import '../styles/App'

export default class App extends Component {
  render() {
    return (
      <div id="home">
        <Logo />
        <Social />
      </div>
    )
  }
}
