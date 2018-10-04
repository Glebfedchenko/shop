import React from 'react';
import {lifecycle, compose} from 'recompose';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../../assets/braun_logo.png';
import * as actions from '../../../redux/actions/categories';

const Header = ({categories}) => (
  <header className="header">
    <img src={logo} alt="" />
    <div className="header__container">
      {categories
        ? categories.map(cat => (
            <div key={cat._id}>
              <Link to="/">{cat.name}</Link>
            </div>
          ))
        : null}
    </div>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default compose(
  connect(
    state => ({categories: state.categories.categories}),
    dispatch => ({
      getAllCategories: () => dispatch(actions.getAllCategories()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.getAllCategories();
    },
  }),
)(Header);
