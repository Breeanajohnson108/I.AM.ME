import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import generalImage from '../assets/general.jpg'
import ActionBtn from '../components/ActionBtn'
import Footer from '../components/Footer'

export default function general() {
  return (
    <div>
      <Header />
      <Title />
      <p id="gTitle">Category: General</p>
      <img id="generalImg" src={generalImage}></img>
      <p id="affirmations">My affirmation</p>
      <ActionBtn />
    </div>
  )
}
