import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'

export default function Create() {
  return (
    <div>
      <Header />
      <Title />
      <button id="back" to='/MyAffirmations'>Go Back</button>
      <p id="gTitle">Add Your Own</p>
      <form id="cForm">
        <textarea id="textBox"></textarea>
        <br></br>
        <button id="cBtn">Create</button>
      </form>
    </div>
  )
}
