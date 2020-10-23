import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import categories from '../services/categories'

export default function ChooseCategory(props) {
  
  return (
    <div id="b">
      <button>Choose an category</button>
      
      <Link to='/MyAffirmations'>My Affirmations</Link>
    </div>
  )
}
