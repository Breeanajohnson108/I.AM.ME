import React from 'react'
import { Link } from 'react-router-dom'
import sunflower from '../assets/sunflower.png'

export default function Header() {
  return (
    <div id="navBar">
      <img id="logo" src={sunflower}></img>
      <p id="navTitle">I.AM.ME</p>
    </div>
  )
}
