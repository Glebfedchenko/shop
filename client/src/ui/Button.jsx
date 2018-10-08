import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const StyledButton = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  padding: ${props => props.p};
  margin: ${props => props.m};
  color: ${props => props.color};
  background-color: ${props => props.bg};
  font-weight: ${props => props.fw};
  border: ${props => props.border};
  border-radius: ${props => props.br};
  type: ${props => props.type};
`;
export default StyledButton;

export const Button = ({children, to}) => (
  <StyledButton w="20px" bg="#000">
    <Link to={to}>{children}</Link>
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
