import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import ActionBtn from '../components/ActionBtn'
import believeImg from '../assets/believe.jpg'

export default function Believe() {
  return (
    <div>
      <Header />
      <Title />
      <p id="gTitle">Categoty: Believe In Yourself</p>
      <img id="generalImg" src={believeImg}></img>
      <p id="affirmations">My affirmation</p>
      <ActionBtn />
      <Footer />
    </div>
  )
}
