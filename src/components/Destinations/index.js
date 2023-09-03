import './index.css'

const Destinations = () => (
  <div className="destination">
    <div className="leftSide">
      <div className="sphere">{null}</div>
      <p className="para">Discover the beauty of the tropics</p>
      <h1 className="destiHeading">
        Tropical Destinations <span className="spanElement">For Student</span>
      </h1>
      <p className="destiPara">
        Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
        integer rutrum nisi. A nec nisl vitae
      </p>
      <button className="signupButton" type="button">
        SIGN UP
      </button>
    </div>

    <div className="rightSide">
      <div className="quarter">{null}</div>
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693668338/Group_171_dhkdbn.png"
        className="studentImage"
        alt="images"
      />
      <div className="circle">{null}</div>
    </div>
  </div>
)

export default Destinations
