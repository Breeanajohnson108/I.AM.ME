import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

export default function MyAffirmations(props) {
  const { userAffirmations } = props;

  return (
    <div>
      <Header />
      <Title />
      <p id="aTitle">My Affirmations</p>
      <Link id="back" to="/home">
        Home
      </Link>

      <Link id="own" to="/create">
        Add Your Own
      </Link>
      {userAffirmations.map((aff) => (
        <div id="listBox">
          <Link className="eachALink" to={`/edit/${aff.id}`}>
            <div className="eachAbox">{aff.affirmations}</div>
          </Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}
