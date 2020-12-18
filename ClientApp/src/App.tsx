import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './screens/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewProjectScreen, { NewProjectScreenPath } from './screens/NewProjectScreen';
import ProjectScreen, { ProjectScreenPath } from './screens/ProjectScreen';

const App = () => (
  <Router>
    <CssBaseline />
    <Switch>
      <Route
        exact
        path={'/'}
        component={Dashboard}
      />
      <Route
        path={NewProjectScreenPath}
        component={NewProjectScreen}
      />
      <Route
        path={ProjectScreenPath}
        component={ProjectScreen}
      />
    </Switch>
  </Router>
);

export default App;
