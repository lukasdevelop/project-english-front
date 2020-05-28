import React from 'react'
import './styles.css'

export default function Logon() {

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
      <div className="auth-container">
        <header>
          <h2>Sign Up</h2>
        </header>
        <div className="auth-form">
          <form>
            <label for="name">Name</label>
            <input type="text"></input>
            <label for="email">Email</label>
            <input type="email"></input>
            <label for="facebook">Facebook</label>
            <input type="text" value="https://www.facebook.com/"></input>
            <label for="github">Github</label>
            <input type="text" value="https://github.com/"></input>
            <label for="password">Password</label>
            <input type="password"></input>
            <label for="name">Do you were invited ?</label>
            <div className="input-group">

              <label>Yes</label>
              <input type="radio"></input>
              <label>No</label>
              <input type="radio"></input>

            </div>
            <button><span>Create Account</span></button>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}
