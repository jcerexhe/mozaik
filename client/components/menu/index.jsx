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
            { url: '#', val: 'why mozaik?' },
            { url: '/discover', val: 'discover' },
            { url: '#', val: 'study areas' },
            { url: '#', val: 'education agency' },
            { url: '#', val: 'sign up' }
          ]
        },
        {
          heading: 'for schools',
          links: [
            { url: '#', val: 'why partner with mozaik' },
            { url: '#', val: 'education agency' },
            { url: '#', val: 'sign up' }
          ]
        },
        {
          heading: 'about mozaik',
          links: [
            { url: '#', val: 'who is mozaik?' },
            { url: '#', val: 'contact us' }
          ]
        }
      ]
    };
  }

  updateMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { currentPath } = this.props;
    const { menuOpen, menu } = this.state;
    return (
      <div>
        <div className='navbar'>
          <div className='discover'>
          { /*<a href='/#search'>discover</a> */}
          </div>
          <div className='logo'>
            <a href='/'><img src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" /> </a>
          </div>
          <div className='links'>
            <a href='#'>
              <img className='icon-white' src='/images/icons/mozaik-icons-6.png' />
            </a>
            <a href="/#search">
              <img className='icon-white' src='/images/icons/mozaik-icons-5.png' />
            </a>
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
        <div id='nav' className={ currentPath === '/' ? 'clear' : '' }>
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
              <div className="social-nav">
                <a href='https://web.facebook.com/Mozaik-Creative-213677359160166/'>
                  <img className="img-resp" src='/images/social-icons/sm-facebook.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-youtube.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-instagram.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-snapchat.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-pinterest.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-twitter.png' />
                </a>
                <a href='#'>
                  <img className="img-resp" src='/images/social-icons/sm-linked-in.png' />
                </a>
              </div>
            </div>
          </div>
        </SlidingPane>
      </div>
    );
  }
}
