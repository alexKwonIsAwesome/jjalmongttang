import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from '../components/Home';
import JjalInstance from '../components/JjalInstance';

export default (
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="jjal" component={JjalInstance} />
    </Route>
);
