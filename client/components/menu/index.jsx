import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';

export default class MenuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentPath } = this.props;
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
              <div id='open-menu'>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div id='menu' className='hidden'>
          <div className='menu-content'>
            <ul>
              <h3 className='menu-heading'>for students</h3>
              <li>
                <a href='#'>discover</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>study areas</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>education</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>sign up</a>
                <div className='border' />
              </li>
            </ul>
            <ul>
              <h3>for schools</h3>
              <li>
                <a href='#'>why mozaik</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>education agent</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>sign up</a>
                <div className='border' />
              </li>
            </ul>
            <ul>
              <h3>about mozaik</h3>
              <li>
                <a href='#'>who is mozaik</a>
                <div className='border' />
              </li>
              <li>
                <a href='#'>contact us</a>
                <div className='border' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
