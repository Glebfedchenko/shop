import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Layout from './Layout';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={() => <div>go</div>} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default Routes;
