import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Router as ReactRouter, Route } from 'react-router';

import { history } from '../store';

import NotFound from './notFound';
import Welcome from './welcome';
import OrderForm from './orderForm';
import OrderList from './orders';
import Order from './order';

class Router extends Component {
  render() {
    return (
      <ReactRouter history={history}>
        <div>
          <header className="header-section container-fluid">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a className="navbar-brand" href="/">
                <img
                  src="images/image4.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt=""
                />
                L'ultima Cena
              </a>
              <ul className="navbar-nav mr-auto" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Build Your Pizza!
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/statistics">
                    Statistics
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={OrderForm} />
            <Route path="/order/:id" component={Order} />
            <Route path="/orders" component={OrderList} />
            <Route path="/info" component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ReactRouter>
    );
  }
}
export default Router;
