import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import _ from 'lodash';

export default class MenuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menu: [
        {
          heading: 'for students',
          links: [
            { url: '#', val: 'discover' },
            { url: '#', val: 'study areas' },
            { url: '#', val: 'education' },
            { url: '#', val: 'sign up' }
          ]
        },
        {
          heading: 'for schools',
          links: [
            { url: '#', val: 'why mozaik' },
            { url: '#', val: 'education agent' },
            { url: '#', val: 'sign up' }
          ]
        },
        {
          heading: 'about mozaik',
          links: [
            { url: '#', val: 'who is mozaik' },
            { url: '#', val: 'contact us' }
          ]
        }
      ]
    };
  }

  updateMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
    const navbar = document.getElementById('nav');
    const isClear = navbar.classList.contains('clear');
    if (!isClear) navbar.classList.add('clear');
    else navbar.classList.remove('clear');
  }

  render() {
    const { currentPath } = this.props;
    const { menuOpen, menu } = this.state;
    // TODO menu compnent & navbar component
    return (
      <div>
        <div id='nav' className={ currentPath === '/' ? 'clear' : '' }>
          <div className='navbar'>
            <div className='discover'>
              <a href='#'>discover</a>
            </div>
            <div className='logo'>
              <a href='/'>mozaik</a>
            </div>
            <div className='links'>
              <a href='#'>profile</a>
              <a href='#'>search</a>
              <div id='open-menu'
                onClick={ () => this.updateMenu() }
                className={ menuOpen ? 'open' : '' }>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <SlidingPane
          isOpen={ menuOpen }
          onRequestClosed={ () => this.setState({ menuOpen: false }) }
          width='100%'
          className='sliding-menu-pane'
        >
          <div id='menu'>
            <div className='menu-content'>
              { _.map(menu, (subMenu) => {
                return (
                  <ul>
                    <h3>{ subMenu.heading }</h3>
                    { _.map(subMenu.links, (link) => {
                      return (
                        <li>
                          <a href={ link.url }>{ link.val }</a>
                          <div className='border' />
                        </li>
                      );
                    }) }
                  </ul>
                );
              }) }
            </div>
          </div>
        </SlidingPane>
      </div>
    );
  }
}
