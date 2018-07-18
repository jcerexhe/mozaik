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
            { url: '/about-us', val: 'about us' },
            { url: '/search', val: 'discover' },
            { url: '/study-area', val: 'study areas' },
            { url: '/agency-mozaik', val: 'education agency' },
            /*{ url: '#', val: 'sign up' }*/
          ]
        },
        {
          heading: 'for schools',
          links: [
            { url: '/partner-with-mozaik', val: 'why partner with mozaik play' },
            { url: '/agency-mozaik', val: 'education agency' },
            /*{ url: '#', val: 'sign up' } */
          ]
        }
        /*{
          heading: 'about mozaik',
          links: [
            { url: '#', val: 'who is mozaik?' },
            { url: '#', val: 'contact us' }
          ]
        }*/
      ]
    };
  }

  updateMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen }, () => {
      if (this.state.menuOpen == true) {
        document.querySelector('.logo').style.margin = '0 auto';
      } else {
        document.querySelector('.logo').style.margin = this.state.lastLogoStyle;
      };
    });
  }

  getLogoStyle() {
    if (this.state.menuOpen == false) {
      let lastLogoStyle = document.querySelector('.logo').style.margin;
      this.setState({ lastLogoStyle: lastLogoStyle }, () => {
        this.updateMenu();
      });
    } else {
      this.updateMenu();
    };
  }

  render() {
    const { currentPath } = this.props;
    const { menuOpen, menu } = this.state;
    return (
      <div>
        {/*Desktop View*/}
        <div className="desktop-view d-none d-lg-block">
          <div className='navbar'>
            {/*<div className='discover'>
               <a href='/#search'>discover</a>
            </div>*/}
            <div className='logo'>
              <a href='/'><img src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" /> </a>
              {/*<a href='/'><img src="/images/logo/Logo_2.png" /></a>*/}
            </div>
            <div className='links'>
                <div id='open-menu'
                    onClick={ () => this.updateMenu() }
                    className={ menuOpen ? 'open' : '' }>
                    {/*<img className='icon-white' src='/images/menu/Menu_1.png' />*/}
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div>
                  <a href="/search">
                    <img className='icon-white' src='/images/menu/Search_1.png' />
                  </a>
                </div>
                <div>
                  <a href='#'>
                    <img className='icon-white' src='/images/menu/My_Account.png' />
                  </a> 
                </div>     
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
                            {/*<div className='border' />*/}
                          </li>
                        );
                      }) }
                    </ul>
                  );
                }) }
                <div className="social-nav">
                  <a href='https://web.facebook.com/Mozaik-Creative-213677359160166/'>
                    <img className="img-resp" src='/images/old-social-icons/sm-facebook.png' />
                  </a>
                 {/* <a href='#'>
                    <img className="img-resp" src='/images/old-social-icons/sm-youtube.png' />
                  </a>  */}
                  <a href='https://www.instagram.com/mozaikplay/'>
                    <img className="img-resp" src='/images/old-social-icons/sm-instagram.png' />
                  </a>
                  {/* <a href='#'>
                    <img className="img-resp" src='/images/old-social-icons/sm-snapchat.png' />
                  </a>
                  <a href='#'>
                    <img className="img-resp" src='/images/old-social-icons/sm-pinterest.png' />
                  </a> */}
                  <a href='https://twitter.com/MozaikPlay'>
                    <img className="img-resp" src='/images/old-social-icons/sm-twitter.png' />
                  </a>
                 {/* <a href='#'>
                    <img className="img-resp" src='/images/old-social-icons/sm-linked-in.png' />
                  </a> */}
                </div>
              </div>
            </div>
          </SlidingPane>
        {/*Mobile View*/}
        <div className="mobile-view d-lg-none">
          <div>
            <button>Discover</button>
            <button>Login</button>
          </div>
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a href='/'>
              <img className="mobile-logo" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
            </a>
            <div className='links'>
                <div id='open-menu'
                    onClick={ () => this.updateMenu() }
                    className={ menuOpen ? 'open' : '' }>
                    {/*<img className='icon-white' src='/images/menu/Menu_1.png' />*/}
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div>
                  <a href="/search">
                    <img className='icon-white' src='/images/menu/Search_1.png' />
                  </a>
                </div>
                <div>
                  <a href='#'>
                    <img className='icon-white' src='/images/menu/My_Account.png' />
                  </a> 
                </div>     
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
