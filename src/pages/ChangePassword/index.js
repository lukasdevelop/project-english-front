import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import api from '../../services/api'

export default function ChangePassword() {
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onChange"
  })
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [validation, setValidation] = useState([])
  const { touched  } = formState;
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const history = useHistory()

  const loadingPages = status => (status === 0) ? setLoading(false) : setLoading(true)

  const handleSubmitChange = async ({password}) => {

    let token = (new URLSearchParams(window.location.search)).get("token")

    const data = {
      password,
      token
    }

    try {
      const response = await api.put('auth/reset-password', data)

      alert(response.data.message)

      history.push('/signin')

    } catch (error) {
      setValidation(error.response.data.message)
    }
  }

  const onVerifyNewPassword = () => {

    if(touched.password === true && touched.confirmpassword === true){
      if(password !== confirmpassword){
        setValidation('The passwords dont match')
        setShow(true)

      }else{
        setShow(false)
        setValidation("")
      }
   }
  }

return (
  <>
    <div className="signin-container">
      <div className="main-container">
        <section className="auth-sidebar">
          <div className="auth-sidebar-container">
            <header>
              <h1>Project XP</h1>
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
              <h2><strong>Reset Password</strong></h2>
            </header>
            <div className="auth-form">
              <form onSubmit={handleSubmit(handleSubmitChange)}>
                <div className="input-group">
                  <label htmlFor="new">New Password</label>
                </div>
                <input type="password"
                  ref={register({ required: true })}

                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={onVerifyNewPassword}
                />
                <p className="errors">{errors.password && 'Please new password is required'}</p>

                <label htmlFor="new">Confirm Password</label>
                <input type="password"
                  ref={register({ required: true })}
                  name="confirmpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={onVerifyNewPassword}
                />
                {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}

                <p className="errors">{errors.confirmpassword && 'Please confirm a new password'}</p>
                <button disabled={show}><span>Change</span></button>
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
