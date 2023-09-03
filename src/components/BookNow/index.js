import {useState} from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'

const BookNow = () => {
  const [date, setDate] = useState()
  const [departureDate, setDeparture] = useState()
  const [starCount, changeStar] = useState(0)
  const [roomCount, changeRoom] = useState(0)

  const starChange = () => {
    if (starCount > 0 && starCount < 6) {
      changeStar(count => count - 1)
    }
  }

  const increaseStar = () => {
    if (starCount >= 0 && starCount < 5) {
      changeStar(count => count + 1)
    }
  }

  const roomChange = () => {
    if (roomCount > 0 && roomCount <= 10) {
      changeRoom(count => count - 1)
    }
  }

  const increaseRoom = () => {
    if (roomCount >= 0 && roomCount < 10) {
      changeRoom(count => count + 1)
    }
  }
  return (
    <div className="bookNowContainer">
      <div className="leftBookingSide">
        <div className="arrangeItems">
          <img
            src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693732799/Group_167_1_syqqrb.png"
            className="bookingImage"
            alt="images"
          />
          <div className="circles">{}</div>
        </div>
      </div>
      <div className="rightBookingSide">
        <div className="bookingBox">
          <h1 className="bookingHeading">Book now</h1>
          <p className="bookingPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="cityInputBox">
            <label htmlFor="cityInput" className="inputLabel">
              CITY
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              id="cityInput"
              className="inputBox"
            />
          </div>

          <div className="boxDate">
            <div className="dateBox">
              <label htmlFor="arrival" className="inputLabel">
                ARRIVAL
              </label>
              <DatePicker
                selected={date}
                id="arrival"
                onChange={date => setDate(date)}
                className="inputBoxs"
              />
            </div>

            <div className="dateBox">
              <label htmlFor="arrival" className="inputLabel">
                DEPARTURE
              </label>
              <DatePicker
                selected={departureDate}
                id="arrival"
                onChange={departureDate => setDeparture(departureDate)}
                className="inputBoxs"
              />
            </div>
          </div>

          <div className="boxDate">
            <div className="detailsBoxes">
              <p className="inputLabels">STAR</p>
              <div className="roomAndRating">
                <button
                  className="leftClick"
                  type="button"
                  onClick={starChange}
                >
                  -
                </button>
                <p className="texts">{starCount}</p>
                <button
                  className="rightClick"
                  type="button"
                  onClick={increaseStar}
                >
                  +
                </button>
              </div>
            </div>

            <div className="detailsBoxes">
              <p className="inputLabels">ROOM</p>
              <div className="roomAndRating">
                <button
                  className="leftClick"
                  type="button"
                  onClick={roomChange}
                >
                  -
                </button>
                <p className="texts">{roomCount}</p>
                <button
                  className="rightClick"
                  type="button"
                  onClick={increaseRoom}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button className="bookingButton" type="button">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookNow
