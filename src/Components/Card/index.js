import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {

  constructor() {
    super();
    this.state = { show: '' }
  }

  componentDidMount

  handleToggleCard = () => {
    if (this.state.show === '')
      this.setState({ show: 'showCard' })
    else
      this.setState({ show: '' })
  }

  render() {
    return (
      <div className={ `cardContainer ${ this.props.container } ${ this.state.show }` } onClick={ this.handleToggleCard }>
        <div className='card'>
          {
            this.props.value ?
              this.props.value
            :
              null
          }

          {
            this.props.image ?
              <img src={ this.props.image } alt="Coffee" title="Coffee" />
            :
              null
          }
        </div>
      </div>
    );
  }
}