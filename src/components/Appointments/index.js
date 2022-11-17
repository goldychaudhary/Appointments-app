import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItems from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {apppointmentList: [], title: '', date: ''}

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: v4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      apppointmentList: [...prevState.apppointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      apppointmentList: prevState.apppointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  starredAppointments = () => {
    this.setState(prevState => ({
      apppointmentList: prevState.apppointmentList.filter(
        each => each.isStarred === true,
      ),
    }))
  }

  render() {
    const {apppointmentList, title, date} = this.state
    console.log(format(new Date(), 'dd MMMM yyyy,EEEE'))
    console.log(date)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="upper-section">
            <div>
              <h1 className="add-appoint-h1">Add Appointment</h1>
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  onChange={this.onChangeTitle}
                  value={title}
                  id="title"
                  type="text"
                  placeholder="Title"
                />
                <br />
                <label htmlFor="date">DATE</label>
                <br />
                <input
                  value={date}
                  onChange={this.onChangeDate}
                  id="date"
                  type="date"
                />
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              className="main-pic"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="starred-list-head">
            <h1 className="appointments-h1">Appointments</h1>
            <button
              onClick={this.starredAppointments}
              className="starred-btn"
              type="button"
            >
              Starred
            </button>
          </div>
          <ul className="ul-list-container">
            {apppointmentList.map(each => (
              <AppointmentItems
                key={each.id}
                details={each}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
