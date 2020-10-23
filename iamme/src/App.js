import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Layout from './layouts/Layout'
import Login from './screens/Login';
import Register from './screens/Register'
import { logIn } from './services/authentatic';
import { register } from './services/authentatic';
import Home from './screens/Home';
import MyAffirmations from './screens/MyAffirmations'
import General from './screens/General';
import Love from './screens/Love'
import Career from './screens/Career'
import Health from './screens/Health'
import Believe from './screens/Believe'
import Edit from './screens/Edit'
import Create from './screens/Create'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const handleLogin = async (logData) =>
  {
    const userData = await logIn(logData)
    setCurrentUser(userData)
  }
  const handleRegister = async (regData) =>
  {
    const userData = await register(regData)
    setCurrentUser(userData)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/">
            <Layout></Layout>
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
            <Register handleRegister={handleRegister} />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/general">
            <General />
        </Route>
        <Route path="/believe">
            <Believe />
        </Route>
        <Route path="/love">
            <Love />
        </Route>
        <Route path="/career">
            <Career />
        </Route>
        <Route path="/health">
            <Health />
        </Route>
        <Route path="/edit">
            <Edit />
        </Route>
        <Route path="/create">
            <Create />
        </Route>
        <Route path="/myaffirmations">
            <MyAffirmations />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
