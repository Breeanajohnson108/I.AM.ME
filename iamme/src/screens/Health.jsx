import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import ActionBtn from '../components/ActionBtn'
import healthImg from '../assets/health.jpg'

export default function Health(props) {
  const{randoAffirmation}= props
  return (
    <div>
      <Header />
      <Title />
      <p id="gTitle">Category: Improve Health</p>
      <img id="generalImg" src={healthImg}></img>
      <p id="affirmations">{randoAffirmation}</p>
      <ActionBtn randomAffirmations={props.randomAffirmations}/>
      <Footer />
    </div>
  )
}
