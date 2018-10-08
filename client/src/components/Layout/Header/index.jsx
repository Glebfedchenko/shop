import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/braun_logo.png';

const Header = () => (
  <header className="header">
    <div className="header__homelink">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
    <div className="header__register">
      <Link to="/register_login">Register</Link>
    </div>
  </header>
);

Header.propTypes = {
  // eslint-disable-next-line
  categories: PropTypes.arrayOf(Object),
};

export default Header;
