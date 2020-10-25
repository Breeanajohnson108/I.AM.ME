import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import {postAffirmation} from '../services/affirmations'

export default function Create(props) {
  const { currentUser , oneAffirmation,handleCreateSubmit} = props 
  console.log(currentUser)

  const [affirmation, setAffirmation] = useState({
    affirmations: "",
    user_id: currentUser.id
    
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
      <form id="cForm" onSubmit={(e) => { 
        e.preventDefault()
        handleCreateSubmit(affirmation)
      }}>
        <textarea id="textBox" name="affirmations" value={affirmation.affirmations} onChange={handleChange}></textarea>
        <br></br>
        <button type='submit' id="cCreate">Create</button>
      </form>
      <Footer />
    </div>
  )
}
