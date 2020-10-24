import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import ActionBtn from '../components/ActionBtn'
import loveImg from '../assets/love.jpg'


export default function Love() {
  return (
    <div>
      <Header />
      <Title />
      <p id="gTitle">Category: Attract Love</p>
      <img id="generalImg" src={loveImg}></img>
      <p id="affirmations">My affirmation</p>
      <ActionBtn />
      <Footer />
    </div>
  )
}
