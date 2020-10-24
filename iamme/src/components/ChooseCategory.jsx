import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import categories from '../services/categories'
import showcategory from './ShowCategory'

export default function ChooseCategory(props) {
  
  return (
    <div id="chooseBox">
      <Link id="myAffirm" to='/MyAffirmations'>My Affirmations</Link>
    </div>
  )
}
