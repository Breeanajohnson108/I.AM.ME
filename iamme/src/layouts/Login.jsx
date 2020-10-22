import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'

export default function Login(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Title />
    </div>
  )
}
