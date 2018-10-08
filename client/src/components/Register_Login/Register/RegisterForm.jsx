import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';
import {renderField, required, email} from '../fields';

const RegisterForm = ({handleSubmit, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="name"
      type="text"
      component={renderField}
      label="Name"
      validate={[required]}
    />
    <Field
      name="lastname"
      type="text"
      component={renderField}
      label="Lastname"
      validate={[required]}
    />
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

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({form: 'RegisterForm'})(RegisterForm);
