import React from 'react';
import PropTypes from 'prop-types';
import {lifecycle, compose} from 'recompose';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/actions/categories';

const Home = ({categories}) => (
  <div className="home">
    {categories
      ? categories.map(cat => (
          <div key={cat._id}>
            <Link to={`${cat._id}`}>{cat.name}</Link>
          </div>
        ))
      : null}
  </div>
);
Home.propTypes = {
  // eslint-disable-next-line
  categories: PropTypes.arrayOf(Object),
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
)(Home);
