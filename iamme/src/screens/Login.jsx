import React, {useState} from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login(props) {
  const [formData, setFormData] = useState(
    {
      email: " ",
      password: " "
    })
  
  const { email, password } = formData;
  const { error, handleLogin } = props;

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
      <form id="loginForm" action='/home' onSubmit={(e) =>
      {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3>Log-In</h3>
        {
          error &&
          <p>{error}</p>
        }
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
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <Link to='/register'>Register</Link>
        <button>Log-In</button>
      </form>
      <Footer />
    </div>
  )
}
