import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.scss";
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { logIn } from "./services/authentatic";
import { getOneAffirmation, getAllAffirmations,postAffirmation} from "./services/affirmations";
import { register } from "./services/authentatic";
import Home from "./screens/Home";
import MyAffirmations from "./screens/MyAffirmations";
import General from "./screens/General";
import Love from "./screens/Love";
import Career from "./screens/Career";
import Health from "./screens/Health";
import Believe from "./screens/Believe";
import Edit from "./screens/Edit";
import Create from "./screens/Create";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const [singleAffirmation, setSingleAffirmation] = useState(null);
  const [allAffirmations, setAllAffirmations] = useState([]);
  const [randoAffirmation, setAffirmation] = useState("");

  const oneAffirmation = async (id) => {
    const affirmationData = await getOneAffirmation(id);
    setSingleAffirmation(affirmationData);
  };
  useEffect(() => {
    const handleAllAffirmations = async () => {
      const affirmationsData = await getAllAffirmations();
      console.log(affirmationsData);
      setAllAffirmations(affirmationsData);
    };
    handleAllAffirmations();
  }, []);

  const randomAffirmations = () => {
    const randomId = Math.floor(Math.random() * allAffirmations.length);
    console.log(randomId);
    setAffirmation(allAffirmations[randomId].affirmations);
  };

  const handleLogin = async (logData) => {
    const userData = await logIn(logData);
    setCurrentUser(userData);
    history.push("/home");
  };
  const handleRegister = async (regData) => {
    const userData = await register(regData);
    setCurrentUser(userData);
    history.push("/home");
  };
  const handleCreateSubmit = async (affirmation) => {

    const created = await postAffirmation(affirmation);
    setAllAffirmations((prevState) => [...prevState, created]);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Layout currentUser={currentUser}></Layout>
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
          <General
            randomAffirmations={randomAffirmations}
            randoAffirmation={randoAffirmation}
          />
        </Route>
        <Route path="/believe">
          <Believe
            randomAffirmations={randomAffirmations}
            randoAffirmation={randoAffirmation}
          />
        </Route>
        <Route path="/love">
          <Love
            randomAffirmations={randomAffirmations}
            randoAffirmation={randoAffirmation}
          />
        </Route>
        <Route path="/career">
          <Career
            randomAffirmations={randomAffirmations}
            randoAffirmation={randoAffirmation}
          />
        </Route>
        <Route path="/health">
          <Health
            randomAffirmations={randomAffirmations}
            randoAffirmation={randoAffirmation}
          />
        </Route>
        <Route path="/edit/:id">
          <Edit setAllAffirmations={setAllAffirmations}/>
        </Route>
        <Route path="/create">
          <Create
            currentUser={currentUser}
            oneAffirmation={oneAffirmation}
            handleCreateSubmit={handleCreateSubmit}
          />
        </Route>
        <Route path="/myaffirmations">
          <MyAffirmations
            userAffirmations={
              currentUser
                ? allAffirmations.filter(
                    (aff) => aff.user_id === currentUser.id
                  )
                : []
            }
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
