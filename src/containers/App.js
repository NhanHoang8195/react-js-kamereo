import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './home';

// All routes define here.
const App = ({ store }) => (<Provider store={store}>
  <Router>
    <Route exact path='/' component={Home} />
  </Router>
</Provider>);

App.propTypes = {
  store: PropTypes.object.isRequired,
};
export default App;
