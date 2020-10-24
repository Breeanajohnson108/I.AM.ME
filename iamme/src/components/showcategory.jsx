import React from 'react'
import GeneralImg from '../assets/general.jpg'
import BelieveImg from '../assets/believe.jpg'
import LoveImg from '../assets/love.jpg'
import CareerImg from '../assets/career.jpg'
import HealthImg from '../assets/health.jpg'
import {Link} from 'react-router-dom'

export default function showcategory() {
  return (
    <div id='categoryBox'>
      {/* General category */}
      <div className='boxes'>
        <Link to='/general'>
          <img className='categoryImgs' src={GeneralImg}></img>
          <p> General</p>
        </Link>
      </div>
      {/* Attract Love category */}
      <div className='boxes'>
        <Link to='/love'>
          <img className='categoryImgs' src={LoveImg}></img>
          <p>Attract Love</p>
        </Link>
      </div>
      {/* Believe In Yourself category */}
      <div className='boxes'>
        <Link to='/believe'>
          <img className='categoryImgs' src={BelieveImg}></img>
          <p>Believe In Yourself</p>
        </Link>
      </div>
      {/* Advance In Career category */}
      <div className='boxes'>
        <Link to='/career'>
          <img className='categoryImgs' src={CareerImg}></img>
          <p>Advance In Career</p>
        </Link>
      </div>
      {/* Improve Health category */}
      <div className='boxes'>
        <Link to='/health'>
          <img className='categoryImgs' src={HealthImg}></img>
          <p> Improve Health</p>
        </Link>
      </div>
    </div>
  )
}
