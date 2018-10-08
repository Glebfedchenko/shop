import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Layout from './Layout';
import Home from './Home';
import RegisterLogin from './Register_Login';
import Register from './Register_Login/Register/Register';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register_login" component={RegisterLogin} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default Routes;
