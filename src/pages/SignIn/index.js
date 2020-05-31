import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'

import api from '../../services/api'

export default function Signin() {
  const [validation, setValidation] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      setValidation(error.response.data.message)
    }
  }

  const handleForgot = async (e) => {
   e.preventDefault()
   const teste = e.target.emailrecoverId.value

    console.log(teste)
  }

  function Example() {


    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Forgot Password</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) =>handleForgot(e)}>
          <Modal.Body>

            <Form.Group controlId="emailrecoverId">
              <Form.Control type="email"
                defaultValue={email}
                name="emailrecover"
              />
              <br />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button  className="button">
              Send Email
            </button>
          </Modal.Footer>
          </form>
      </Modal>
      </>
    );
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
                <form onSubmit={(e) => handleLogin(e)}>
                  <label htmlFor="email">Email</label>
                  <input type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <span className="btn-forgot" onClick={handleShow}>Forgot password?</span>

                  </div>
                  <input type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button><span>Sign In</span></button>
                  <p className="errors">{validation}</p>
                </form>
                <Example />
              </div>
            </div>
          </section>
        </div>
  )
    </div>

    </>
  )

}
