import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import api from '../../services/api'

export default function Signin() {
  const { register, errors, handleSubmit } = useForm()
  const [validation, setValidation] = useState([])
  const [validationToModel, SetValidationToModel] = useState([])
  const [controlMsg, setControlMsg] = useState(true)

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

  const handleLogin = async () => {

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

  const mensagens = (code) => {

    (code === 0) ? setControlMsg(true) : setControlMsg(false);
  }


const handleForgot = async (e) => {
  e.preventDefault()

  const email = e.target.emailrecoverId.value

  if (email === "") {

    mensagens(0)
    SetValidationToModel('Email is required')
    return
  }
  const data = {
    email
  }
  try {
    const response = await api.post('auth/forgot-password', data)

    mensagens(1)
    SetValidationToModel(`${response.data.message} Verify your E-mail.`)

  } catch (error) {
    SetValidationToModel(error.response.data.message)
  }
}

function RecoverModal() {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => handleSubmit(handleForgot(e))}>
          <Modal.Body>
          <Form.Label>Email address</Form.Label>
            <Form.Group controlId="emailrecoverId">
              <label></label>
              <Form.Control type="email"
                ref={register({ required: true })}
                name="emailrecover"
              />
              <span className={controlMsg ? 'errors' : 'success'}>{validationToModel}</span>
              <br />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="button">
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
              <form onSubmit={handleSubmit(handleLogin)}>
                <label htmlFor="email">Email</label>
                <input type="text"
                  ref={register({ required: true })}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errors">{errors.email && 'Please email is required'}</p>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <span className="btn-forgot" onClick={handleShow}>Forgot password?</span>
                </div>
                <input type="password"
                  ref={register({ required: true })}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errors">{errors.password && 'Please password is required'}</p>
                <button><span>Sign In</span></button>
                <p className="errors">{validation}</p>
              </form>
              <RecoverModal />
            </div>
          </div>
        </section>
      </div>
  )
    </div>

  </>
)

}
