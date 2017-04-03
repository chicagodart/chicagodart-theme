import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFontSize, toggleContrast } from '../reducers/toggle';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showHideMenu = this.showHideMenu.bind(this);
  }

  toggleMenu() {
    const mq = window.matchMedia('(max-width: 640px)');
    if (mq.matches) {
      this.setState({
        menu: !this.state.menu
      });
    }
  }

  closeMenu() {
    this.setState({
      menu: false
    });
  }

  showHideMenu() {
    const mq = window.matchMedia('(max-width: 640px)');
    if (!mq.matches) return '';
    if (mq.matches && this.state.menu) {
      return '';
    }
    return 'hide-menu';
  }

  render() {
    const toggleContrast = this.props.toggleContrast;
    const toggleFontSize = this.props.toggleFontSize;
    return (
      <div className="clearfix">
        <nav className="navbar col col-12">
          <div className="navbar-container">
            <div className="navbar-brand">
              <Link to="/">
                <div>Chicago</div>
                <div><span>D</span><span id="art-parens">(ART)</span></div>
              </Link>
            </div>
            <nav className="navbar-menu-center">
              <ul id={this.showHideMenu()}>
                <li onClick={this.closeMenu}><Link to="/about">About</Link></li>
                <li onClick={this.closeMenu}><Link to="/events">Tickets & Events</Link></li>
                <li onClick={this.closeMenu}><Link to="/donate">Donate</Link></li>
                <li onClick={this.closeMenu}><Link to="/auditions">Auditions</Link></li>
                <li onClick={this.closeMenu}><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </nav>
            <div className="navbar-menu-right">
              <ul>
                <li onClick={toggleContrast}>
                  <a href="#">
                    <i className="fa fa-adjust fa-lg" title="Toggle light/dark view" />
                  </a>
                </li>
                <li onClick={toggleFontSize}>
                  <a href="#">
                    <i className="fa fa-font fa-lg" title="Toggle to large font view" />
                  </a>
                </li>
                <a href="#">
                  <i className="fa fa-bars fa-lg toggle-nav" onClick={this.toggleMenu} aria-hidden="true" />
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  toggleFontSize: PropTypes.func,
  toggleContrast: PropTypes.func
};

export default connect(() => ({}), { toggleFontSize, toggleContrast })(Navbar);
