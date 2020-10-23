import React from 'react'
import { Link } from 'react-router-dom';

export default function UserAuthBtns() {
  return (
    <div id="authBtnContainer">
      <Link id="nUser" to="/register">New User</Link>
      <Link id="eUser" to="/login">Existing User</Link>
    </div>
  )
}
