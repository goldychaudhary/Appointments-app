import './index.css'

const AppointmentItems = props => {
  const {details, toggleIsStarred} = props
  const {id, title, date, isStarred} = details
  console.log(isStarred)

  const onStarBtnClick = () => {
    toggleIsStarred(id)
  }

  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="listItem-bg">
      <div className="name-star-container">
        <h1>{title}</h1>
        <button onClick={onStarBtnClick} type="button">
          <img src={starImageUrl} alt="star" />
        </button>
      </div>
      <p className="dateElem">{`Date: ${date}`}</p>
    </li>
  )
}

export default AppointmentItems
