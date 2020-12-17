import React from 'react';
import { Route } from 'react-router';
import Dashboard from './screens/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <React.Fragment>
    <CssBaseline />
        <Route exact path='/' component={Dashboard} />
  </React.Fragment>
);

export default App;
