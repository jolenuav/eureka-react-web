import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Catalogue from '../screens/Catalogue';
import CatalogueProducts from '../screens/CatalogueProducts';
import Order from '../screens/Order';

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={{ pathname: '/catalogue' }} />
        </Route>
        <Route path='/catalogue' exact children={<Catalogue />} />
        <Route path='/catalogue/order' exact children={<Order />} />
        <Route path='/catalogue/:commerceId' children={<CatalogueProducts />} />
      </Switch>
    </Router>
  );
}
