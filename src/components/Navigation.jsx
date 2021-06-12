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
import MyOrder from '../screens/payment-step/MyOrder';

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={{ pathname: '/catalogue' }} />
        </Route>
        <Route path='/catalogue' exact children={<Catalogue />} />
        <Route path='/catalogue/myorder' children={<MyOrder />} />
        <Route
          path='/catalogue/:commerceId'
          exact
          children={<CatalogueProducts />}
        />
        <Route
          path='/catalogue/order/:commerceId/:productId'
          exact
          children={<Order />}
        />
      </Switch>
    </Router>
  );
}
