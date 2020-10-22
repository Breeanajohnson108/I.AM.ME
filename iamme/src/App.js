import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Layout from './layouts/Layout';
import Login from './layouts/Login';

function App() {
  return (
    <Layout>
      {/* <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch> */}
    </Layout>
  );
}

export default App;
