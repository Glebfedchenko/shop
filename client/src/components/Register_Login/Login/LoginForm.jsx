import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';
import {renderField, email, required} from '../fields';

const LoginForm = ({handleSubmit, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      component={renderField}
      label="Email"
      validate={[required, email]}
    />
    <Field
      name="password"
      type="password"
      component={renderField}
      label="Password"
      validate={required}
    />
    <div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({form: 'LoginForm'})(LoginForm);
