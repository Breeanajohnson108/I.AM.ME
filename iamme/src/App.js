import React, {useState} from 'react';
import { Route, Switch, useHistory  } from 'react-router-dom';
import './App.scss';
import Layout from './layouts/Layout'
import Login from './screens/Login';
import Register from './screens/Register'
import { logIn } from './services/authentatic';
import { getOneAffirmation } from './services/affirmations'
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
  const history = useHistory();

  const [singleAffirmation, setSingleAffirmation] = useState(null)

  const oneAffirmation = async (id) =>
  {
    const affirmationData = await getOneAffirmation(id)
    setSingleAffirmation(affirmationData)
  }

  const handleLogin = async (logData) =>
  {
    const userData = await logIn(logData)
    setCurrentUser(userData);
    history.push('/home')
  }
  const handleRegister = async (regData) =>
  {
    const userData = await register(regData)
    setCurrentUser(userData)
    history.push('/home')
  }
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Layout
            currentUser={currentUser}
          ></Layout>
        </Route>
        <Route path="/login">
          <Login currentUser={currentUser} handleLogin={handleLogin} />
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
          <MyAffirmations singleAffirmation={singleAffirmation} oneAffirmation={oneAffirmation}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
