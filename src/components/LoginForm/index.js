import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    navigateToHome: false, 
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {


    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    this.setState({ navigateToHome: true })
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg, username: '', password: ''})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://fakestoreapi.com/auth/login'
    console.log(
      'JSON.stringify(userDetails)=',
      JSON.stringify(userDetails),
      userDetails,
    )
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log('response = ', response)
    try {
      if (response.ok === true) {
        const data = await response.json()
        console.log('data = ', data)
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure('Invalid Credentials')
      }
    } catch (error) {
      console.log('error:', error)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg,navigateToHome} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }
    if (navigateToHome) {
      return <Navigate to="/" />
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
