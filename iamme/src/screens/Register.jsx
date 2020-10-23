import React, {useState} from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

export default function Register(props) {

  const [formData, setFormData] = useState(
    {
      firstname: " ",
      lastname: " ",
      email: " ",
      password: " "
    })
    
    const { firstname, lastname, email, password } = formData;
  const { error, handleRegister } = props;
  
  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData(prevState =>(
      {
        ...prevState,
        [name]: value
      }))
  }
  
  return (
    <div>
      <Header />
      <Title />
      <form id="loginForm" onSubmit={(e) =>
      {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <h3>Register</h3>
        {
          error &&
          <p>{error}</p>
        }
        <label id="emailLabel">
          Firstname:
          <input
            type="text"
            value={firstname}
            name="firstname"
            onChange={handleChange}
          />
        </label>
        <label id="emailLabel">
          Lastname:
          <input
            type="text"
            value={lastname}
            name="lastname"
            onChange={handleChange}
          />
        </label>
        <label id="emailLabel">
          Email Address:
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label id="passwordLabel">
          Password:
          <input
            type="text"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button>Register</button>
      </form>
      <Footer />
    </div>
  )
}
