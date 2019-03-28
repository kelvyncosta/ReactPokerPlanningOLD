import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {

  constructor() {
    super();
    this.state = { show: '' }
  }

  componentDidMount

  handleToggleCard = () => {
    if (this.state.show === '') {
      this.setState({ show: 'showCard' })
      
      let container = document.getElementById(this.props.container);
      const cor = document.defaultView.getComputedStyle(container, null)["background-color"];

      document.querySelector('meta[name="theme-color"]').setAttribute("content", cor);
    }
    else {
      this.setState({ show: '' });

      document.querySelector('meta[name="theme-color"]').setAttribute("content", "#00C5CD");
    }
  }



  render() {
    return (
      <div id={ this.props.container } className={ `cardContainer ${ this.props.container } ${ this.state.show }` } onClick={ this.handleToggleCard }>
        <div className='card'>
          {
            this.props.value ?
              this.props.value
            :
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