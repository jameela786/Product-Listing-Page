import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    showSubmitError: false,
    errorMsg: '',
    navigateToHome: false,
    isSignUp: false, 
  }


  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }


  toggleSignUp = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp,
      showSubmitError: false,
      errorMsg: ''
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    this.setState({ navigateToHome: true })
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true, 
      errorMsg, 
      username: '', 
      password: ''
    })
  }


  submitForm = async event => {
    event.preventDefault()
    const {
      username, 
      password, 
      email, 
      firstname, 
      lastname, 
      isSignUp
    } = this.state

   
    const url = isSignUp 
      ? 'https://fakestoreapi.com/users'
      : 'https://fakestoreapi.com/auth/login'


    const userDetails = isSignUp 
      ? {
          email,
          username,
          password,
          name: {
            firstname,
            lastname
          },
          address: {
            city: 'Unknown',
            street: 'Unknown',
            number: 0,
            zipcode: '00000',
            geolocation: {
              lat: '0',
              long: '0'
            }
          },
          phone: 'Unknown'
        }
      : { username, password }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      
      if (response.ok) {
        const data = await response.json()

        if (isSignUp) {

          this.setState({
            showSubmitError: true,
            errorMsg: 'Account created successfully! Please log in.',
            isSignUp: false
          })
        } else {
          this.onSubmitSuccess(data.token || data.jwt_token)
        }
      } else {
        this.onSubmitFailure('Invalid Credentials')
      }
    } catch (error) {
      console.log('error:', error)
      this.onSubmitFailure('An error occurred')
    }
  }


  renderSignUpFields = () => {
    const { email, firstname, lastname } = this.state
    return (
      <>
        <div className="input-container">
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="username-input-field"
            value={email}
            onChange={this.onChangeEmail}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="firstname">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstname"
            className="username-input-field"
            value={firstname}
            onChange={this.onChangeFirstName}
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="lastname">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastname"
            className="username-input-field"
            value={lastname}
            onChange={this.onChangeLastName}
            placeholder="Last Name"
            required
          />
        </div>
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
          required
        />
      </>
    )
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
          required
        />
      </>
    )
  }

  render() {
    const {
      showSubmitError, 
      errorMsg, 
      navigateToHome, 
      isSignUp
    } = this.state

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

          {isSignUp && this.renderSignUpFields()}
          

          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          
          <button type="submit" className="login-button">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          

          <button 
            type="button" 
            className="toggle-button" 
            onClick={this.toggleSignUp}
          >
            {isSignUp ? 'Switch to Login' : 'Create an Account'}
          </button>
          
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm