import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'emerald',
  'orange',
  'teal',
  'red',
  'white',
  'blue',
  'cyan',
]

class Passwords extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    search: '',
    ischecked: false,
    passwordsList: [],
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletePassword = passwordId => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.filter(
      each => each.id !== passwordId,
    )

    this.setState({passwordsList: updatedPasswordsList})
  }

  updateSearchList = event => {
    this.setState({search: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {
      website,
      username,
      password,
      isChecked,
      passwordsList,
      search,
    } = this.state

    const updatedPasswordsList = passwordsList.filter(each =>
      each.website.includes(search),
    )
    const count = updatedPasswordsList.length

    return (
      <div className="bg-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="password-input-container">
          <form className="form" onSubmit={this.onAddPassword}>
            <h1 className="form-description">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                value={username}
                onChange={this.onChangeName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="password-list-container">
          <div className="passwords-header">
            <div className="your-passwords-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="comments-count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                className="search"
                placeholder="Search"
                onChange={this.updateSearchList}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isChecked}
              id="showPasswords"
              className="check-box"
              onChange={this.onChecked}
            />
            <label htmlFor="showPasswords" className="show-password">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="heading">No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-list">
              {updatedPasswordsList.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  isChecked={isChecked}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Passwords
