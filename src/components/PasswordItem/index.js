import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isChecked, deletePassword} = props
  const {id, website, username, password, initialClassName} = passwordDetails

  const passwordItem = isChecked ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const initial = username ? website[0].toUpperCase() : ''

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className={initialClassName}>
        <p className="initial">{initial}</p>
      </div>
      <div>
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p className="password">{passwordItem}</p>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          type="button"
          onClick={onDeletePassword}
          testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
