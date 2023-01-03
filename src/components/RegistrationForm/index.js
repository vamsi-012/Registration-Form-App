// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  onSubmitForm = () => {
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstNameInput: '',
      lastNameInput: '',
    })
  }

  renderRegistrationForm = () => {
    const {
      firstNameInput,
      lastNameInput,
      showFirstNameError,
      showLastNameError,
    } = this.state
    const firstNameClassName = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    const lastNameClassName = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="firstName" className="label-input">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstNameInput}
            onChange={this.onChangeFirstName}
            className={firstNameClassName}
            placeholder="First name"
            onBlur={this.onBlurFirstName}
          />
        </div>
        {showFirstNameError && <p className="error-message">Required</p>}
        <div className="input-container">
          <label htmlFor="lastName" className="label-input">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastNameInput}
            onChange={this.onChangeLastName}
            className={lastNameClassName}
            onBlur={this.onBlurLastName}
            placeholder="Last name"
          />
        </div>
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmissionView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
