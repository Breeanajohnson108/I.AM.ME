import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'

export default function MyAffirmations() {
  return (
    <div>
      <Header />
      <Title />
      <p id="aTitle">My Affirmations</p>
      <Link id="back" to="/home">Home</Link>
      <br></br>
      <Link to="/create">Add Your Own</Link>
      <div id="listBox">
        <div className="eachAbox">
          This is my affirmation
        </div>
      </div>
      <Footer />
    </div>
  )
}
