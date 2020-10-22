import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import UserAuthBtns from '../components/UserAuthBtns'

export default function Layout(props) {
  return (
    <div >
      <Header />
      {props.children}
      <Title />
      <UserAuthBtns />
      <Footer />
    </div>
  )
}
