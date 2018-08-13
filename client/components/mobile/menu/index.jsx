import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import _ from 'lodash';

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpenLeft: false,
      links: [
        {url: '/', val: 'HOME', img: '/images/mobile/icons/home.png'},
        {url: '/search', val: 'DISCOVER', img: '/images/mobile/icons/discover.png'},
        {url: '/study-area', val: 'STUDY AREAS', img: '/images/mobile/icons/study-areas.png'},
        {url: '/agency-mozaik', val: 'EDUCATION AGENCY', img: '/images/mobile/icons/education-agency.png'},
        {url: '/about-us', val: 'ABOUT US', img: '/images/mobile/icons/about-us.png'},
      ]
    };
  }

  renderPaneTitle() {
    return (
      <img src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png"/>
    )
  }

  prepSlidePane() {
    // get parent of elemennt to be replaced
    var buttonParent = document.querySelector('.mobile-menu-sliding-pane .slide-pane__close')
    // select the child that will be replaced
    var currentButton = buttonParent.childNodes[0];

    // create a new element that will take the place of "currentButton"
    var newButton = document.createElement('div');
    newButton.innerHTML = 'X';

    // replace currentButton with newButton
    buttonParent.replaceChild(newButton, currentButton);
  }

  render() {
    const { currentPath } = this.props;
    let { isPaneOpenLeft, links } = this.state;
    return (
      <div className="mobile-menu-container">
        <div className="navbar-container">
          <div className="bar-1"><a style={{backgroundColor:'#181818'}} href="#">LOGIN</a><a href="/search">DISCOVER</a></div>
          <div className="bar-2">
            <div className="logo">
              <a href='/'>
                <img src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png"/>
              </a>
            </div>
            <div className="menu-icon-slot">
              <div id="mobile-menu-icon" onClick={ () => this.setState({ isPaneOpenLeft: true }, () => {this.prepSlidePane()}) }>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
              </div>
            </div>
          </div>
        </div>
        <SlidingPane
          className='mobile-menu-sliding-pane'
          overlayClassName='mobile-menu-sliding-pane-overlay'
          isOpen={ isPaneOpenLeft }
          title={ this.renderPaneTitle() }
          from='left'
          width='75%'
          onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
          <ul>
            {_.map(links, (link, i) => {
              if (currentPath == link.url) {
                return (
                  <li key={'mobile-menu-link-' + i}><a href='' className="active" ><div className="icon"><img src={link.img}/></div><p className="active" >{link.val}</p></a></li>
                )
              } else {
                return (
                  <li key={'mobile-menu-link-' + i}><a href={link.url}><div className="icon"><img src={link.img}/></div><p>{link.val}</p></a></li>
                )
              }
            })}
          </ul>
        </SlidingPane>
      </div>

    );
  }
}