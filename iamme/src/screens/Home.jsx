import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import ChooseCategory from '../components/ChooseCategory'
import Footer from '../components/Footer'
import ShowCategory from '../components/ShowCategory'

export default function Home() {
  return (
    <div>
      <Header />
      <Title />
      <ChooseCategory />
      <ShowCategory />
      <Footer />
    </div>
  )
}
