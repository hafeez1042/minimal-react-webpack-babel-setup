import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'components/Home';

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact key="home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

