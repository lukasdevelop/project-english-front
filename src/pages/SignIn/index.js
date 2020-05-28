import React from 'react'
import {Link} from 'react-router-dom'

export default function Signin() {

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
              <form>
                <label htmlFor="email">Email</label>
                <input type="email"></input>
                <div class="input-group">
                  <label htmlFor="password">Password</label>
                  <nav><Link to="/">Forgot password?</Link></nav>
                </div>
                <input type="password"></input>
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
