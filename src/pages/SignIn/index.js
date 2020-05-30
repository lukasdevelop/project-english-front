import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const data = {
    email,
    password
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await api.post('auth/sign', data)

      const token = `${result.data.token}`
      localStorage.setItem('id', result.data.user.id)
      localStorage.setItem('name', result.data.user.name)
      localStorage.setItem('token', token)

      history.push('/dashboard')

    } catch (error) {

      alert(error.msg)

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
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <nav><Link to="/">Forgot password?</Link></nav>
                </div>
                <input type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button><span>Sign In</span></button>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
    </div>
  )
}
