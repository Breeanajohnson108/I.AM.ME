import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import {postAffirmation} from '../services/affirmations'

export default function Create(props) {
  const [affirmation, setAffirmation] = useState({
    name:""
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) =>
  {
    const { name, value } = event.target;
    setAffirmation({
      ...affirmation,
      [name]: value,
    })
  }

  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    const created = await postAffirmation(affirmation)
    setCreated({created})
  }

  if (isCreated)
  {
    return <Redirect to={`/myaffirmations`} />
  }
  return (
    <div>
      <Header />
      <Title />
      <p id="aTitle">Add Your Own</p>
      <Link id="cBack" to='/MyAffirmations'>Go Back</Link>
      <form id="cForm" onSubmit={handleSubmit}>
        <textarea id="textBox" onChange={handleChange}></textarea>
        <br></br>
        <button type='submit' id="cCreate">Create</button>
      </form>
      <Footer />
    </div>
  )
}
