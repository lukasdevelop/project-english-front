import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import api from '../../services/api'

export default function ChangePassword() {
  const { register, errors, handleSubmit } = useForm()
  const [validation, setValidation] = useState([])


  const [loading, setLoading] = useState(false)

  const [password, setPassword] = useState('')

  const history = useHistory()
  const data = {
    password
  }

const loadingPages = status => (status === 0) ? setLoading(false) : setLoading(true)

const handleForgot = async (e) => {
  e.preventDefault()

  const email = e.target.emailrecoverId.value

  if (email === "") {
    loadingPages(1)

    loadingPages(0)
    return
  }
  const data = {
    email
  }
  loadingPages(1)
  try {
    const response = await api.post('auth/forgot-password', data)

    console.log(response.data.message)

  } catch (error) {
    console.log(error.response.data.message)
  }
  loadingPages(0)
}

return (
  <>
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
              <form onSubmit={handleSubmit()}>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                </div>
                <input type="password"
                  ref={register({ required: true })}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errors">{errors.password && 'Please password is required'}</p>
                <button><span>Change</span></button>
                <p className="errors">{validation}</p>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
    </div>

  </>
)

}
