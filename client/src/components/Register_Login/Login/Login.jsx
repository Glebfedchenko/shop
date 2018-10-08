import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import LoginForm from './LoginForm';
import * as actions from '../../../redux/actions/users';

const Login = ({loginUser, history, loginSuccess}) => {
  const onSubmit = ({email, password}) => {
    const formData = {email, password};
    loginUser(formData);
    if (loginSuccess) {
      history.push('/');
    } else {
      history.push('/register_login');
    }
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

Login.defaultProps = {
  loginSuccess: PropTypes.func,
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  loginSuccess: PropTypes.func,
};

export default compose(
  withRouter,
  connect(
    state => ({loginSuccess: state.users.loginSuccess}),
    dispatch => ({loginUser: data => dispatch(actions.loginUser(data))}),
  ),
)(Login);
