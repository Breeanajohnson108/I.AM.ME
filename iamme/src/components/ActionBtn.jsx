import React from "react";
import { Link } from "react-router-dom";
import heartImg from "../assets/heart.png";
import homeImg from "../assets/home.png";
import refreshImg from "../assets/refreshing.png";

export default function ActionBtn(props) {
    const {randomAffirmations}=props
  return (
    <div id="actionBtn">
      <Link to="/MyAffirmations">
        <img className="imgBtn" src={heartImg}></img>
      </Link>
      <Link to="/home">
        <img className="imgBtn" src={homeImg}></img>
      </Link>

      <img className="imgBtn" src={refreshImg} onClick={randomAffirmations}></img>
    </div>
  );
}
