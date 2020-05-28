import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function Logon() {

  const [toogle, setToggle] = useState(true)

  const toogleState = () => setToggle(!toogle)

  const Code = () => {

    if(!toogle){
      return <input type="text" name="code" placeholder="Your Code"></input>
    }else{
      return <span style={{width:'400px', fontSize:'18px'}}>Get in the queue</span>
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
          <form>
            <label htmlFor="name">Name</label>
            <input type="text"></input>
            <label htmlFor="email">Email</label>
            <input type="email"></input>
            <label htmlFor="facebook">Facebook</label>
            <input type="text" defaultValue="https://www.facebook.com/"></input>
            <label htmlFor="github">Github</label>
            <input type="text" defaultValue="https://github.com/"></input>
            <label htmlFor="password">Password</label>
            <input type="password"></input>
            <label htmlFor="name">Do you were invited ?</label>
            <div className="input-group">

              <label>Yes </label>
              <input type="radio" checked={!toogle} name="invited" onClick={() => toogleState(true)}></input>
              <label>No </label>
              <input type="radio" checked={toogle} name="invited" onClick={() => toogleState(false)}></input>
              <Code  />

            </div>
            <button><span>Create Account</span></button>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}
