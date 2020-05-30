import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../services/api'

export default function Signin() {
  const { register, handleSubmit, errors } = useForm()
  const [validation, setValidation] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const data = {
    email,
    password
  }

  const handleLogin = async () => {
    //e.preventDefault()
    try {
      const result = await api.post('auth/sign', data)

      const token = `${result.data.token}`
      localStorage.setItem('id', result.data.user.id)
      localStorage.setItem('name', result.data.user.name)
      localStorage.setItem('token', token)

      history.push('/dashboard')

    } catch (error) {
      setValidation(error.response.data.message)
    }

  }

  return (
    <div className="signin-container">
      <div className="main-container">
        <section className="auth-sidebar">
          <div className="auth-sidebar-container">
            <header>
              <h1>Project English</h1>
              <p>Integration between <br />developments to exchange XP</p>
            </header>
          </div>
        </section>
        <section className="container">
          <nav>
            <p>Not a member?<Link to="/"> Sign Up</Link></p>
          </nav>
          <div className="auth-container">
            <header>
              <h2>Sign In</h2>
            </header>
            <div className="auth-form">
              <form onSubmit={handleSubmit( handleLogin )}>
                <label htmlFor="email">Email</label>
                <input type="text"
                  name="email"
                  ref={register({ required: true })}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>{errors.email && 'Please email is required'}</p>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <nav><Link to="/">Forgot password?</Link></nav>
                </div>
                <input type="password"
                  value={password}
                  name="password"
                  ref={register({ required: true})}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>{errors.password && 'Please password is required'}</p>
                <button><span>Sign In</span></button>
                <p className="errors">{validation}</p>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
    </div>
  )
}
