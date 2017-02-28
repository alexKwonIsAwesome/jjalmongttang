import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import JjalInstance from '../components/JjalInstance';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="jjal/:id" component={JjalInstance} />
    </Route>
);
