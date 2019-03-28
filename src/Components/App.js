import React, { Component } from 'react'
import Card from './Card'
import '../Content/reset.css'
import '../Content/global.css'

import coffee from '../Content/CoffeeIcon.png'

export default class App extends Component {

  constructor() {
    super()
    document.title = 'Poker Planning'
  }

  render() {
    return (
      <div className="deck">
          <Card container="a" value="1/2" />
          <Card container="b" value="1" />
          <Card container="c" value="2" />
          <Card container="d" value="3" />
          <Card container="e" value="5" />
          <Card container="f" value="8" />
          <Card container="g" value="13" />
          <Card container="h" value="20" />
          <Card container="i" value="40" />
          <Card container="j" value="100" />
          <Card container="k" value="?" />
          <Card container="l" image={ coffee } />
      </div>
    );
  }
}