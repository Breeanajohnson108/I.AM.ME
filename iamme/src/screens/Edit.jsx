import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'

export default function Edit() {
  return (
    <div>
      <Header />
      <Title />
      <button id="back" to='/MyAffirmations'>Go Back</button>
      <p id="gTitle">View/Edit Affirmation</p>
      <form id="cForm">
        <textarea id="textBox"></textarea>
        <br></br>
        <button id="cBtn">Create</button>
        <button>Delete</button>
      </form>
      <Footer />
    </div>
  )
}
