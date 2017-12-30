import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/Home/Home_index';
import Logout from '../modules/Permission/Logout';

const Content = () => (
  <main className="mt-4">
    <Switch>
      {/* Global Navigation menu links */}
      <Route exact path="/" component={Home} />
      <Route path="/orders" component={Orders} />
      <Route path="/logout" component={Logout} />

      {/* Developer */}
      <Route exact path="/developer/:tab/:id" component={DeveloperIndex} />

    </Switch>
  </main>
);

export default Content;
