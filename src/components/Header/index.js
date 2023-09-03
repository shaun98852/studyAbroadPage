import './index.css'

const Header = () => (
  <div className="headerBox">
    <div className="headerBackground">
      <div className="leftSection">
        <p className="headerDetails">Home</p>
        <p className="headerDetails">About</p>
        <p className="headerDetails">Schedulers</p>
        <p className="headerDetails">Membership</p>
        <p className="headerDetails">Pricing</p>
      </div>

      <div className="rightSection">
        <p className="headerDetail">Offers</p>
        <button className="coursesButton" type="button">
          Courses
        </button>
      </div>
    </div>
  </div>
)

export default Header
