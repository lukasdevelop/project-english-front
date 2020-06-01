import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './styles.css'
import api from '../../services/api'

export default function Logon() {

  const { register, handleSubmit, errors } = useForm()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [validation, setValidation] = useState([])

  const [password, setPassword] = useState('')
  const [facebook, setFacebook] = useState('')
  const [github, setGithub] = useState('')
  const [code, setCode] = useState('')

  const history = useHistory()

  const data = {
    name,
    email,
    password,
    facebook,
    github,
    code
  }

  const [toogle, setToggle] = useState(true)
  const toogleState = () => setToggle(!toogle)

  const handleLogin = async () => {
    try {
      const result = await api.post('/auth/register', data)
      console.log(result)
      history.push('/signin')

    } catch (error) {
      setValidation(error.response.data.message)
    }
  }

  const Code = () => {

    if (!toogle) {
      return <input type="text" ref={register({required: true})} name="code" placeholder="Your Code" value={code} onChange={(e) => setCode(e.target.value)}></input>
    } else {
      return <span style={{ width: '400px', fontSize: '18px' }}>Get in the queue</span>
    }
  }

  return (
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
          <p>Already is member?<Link to="/signin"> Sign In</Link></p>
        </nav>
        <div className="auth-container">
          <header>
            <h2>Sign Up</h2>
          </header>
          <div className="auth-form">
            <form onSubmit={handleSubmit(handleLogin)}>
              <label htmlFor="name">Name</label>
              <input type="text"
                name="name"
                ref={register({required: true})}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="errors">{errors.name && 'Please name is required'}</p>
              <label htmlFor="email">Email</label>
              <input type="email"
                name="email"
                ref={register({required: true})}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="errors">{errors.email && 'Please email is required'}</p>
              <label htmlFor="facebook">Facebook</label>
              <input type="text" placeholder="https://www.facebook.com/"
                name="facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <label htmlFor="github">Github</label>
              <input type="text" placeholder="https://github.com/"
                value={github}
                name="github"
                ref={register({required: true})}
                onChange={(e) => setGithub(e.target.value)}
              />
              <p className="errors">{errors.github && 'Please github is required'}</p>
              <label htmlFor="password">Password</label>
              <input type="password"
                name="password"
                value={password}
                ref={register({required: true})}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="errors">{errors.password && 'Please password is required'}</p>
              <label htmlFor="code">Do you were invited ?</label>
              <div className="input-group">
                <label>Yes </label>
                <input type="radio" defaultChecked={!toogle} name="invited" onBlur={(e) => setCode('')} onClick={() => toogleState(true)}></input>
                <label>No </label>
                <input type="radio" defaultChecked={toogle} name="invited" onBlur={(e) => setCode('')} onClick={() => toogleState(false)}></input>
                <Code />
              </div>
              <p className="errors">{errors.code && 'Code dont be nothing'}</p>
              <p className="errors">{validation}</p>

              <button><span>Create Account</span></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
