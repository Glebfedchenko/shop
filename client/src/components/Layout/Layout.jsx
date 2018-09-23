import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({children}) => (
  <div>
    <Header />
    <div className="page_container">{children}</div>
    Footer
  </div>
);

Layout.propTypes = {children: PropTypes.node.isRequired};
export default Layout;
