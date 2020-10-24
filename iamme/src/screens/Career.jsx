import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import ActionBtn from '../components/ActionBtn'
import careerImg from '../assets/career.jpg'

export default function Career() {
  return (
    <div>
      <Header />
      <Title />
      <p id="gTitle">Category: Advance In Career</p>
      <img id="generalImg" src={careerImg}></img>
      <p id="affirmations">My affirmation</p>
      <ActionBtn />
      <Footer />
    </div>
  )
}
