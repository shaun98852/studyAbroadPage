import Header from '../Header'
import Footer from '../Footer'
import Destinations from '../Destinations'
import Testimonials from '../Testimonials'
import TropicalDestination from '../TropicalDestination'
import OurDestination from '../OurDestinations'
import StudentsDiscounts from '../StudentsDiscounts'
import BookNow from '../BookNow'

import './index.css'

const Home = () => (
  <div className="backgrounds">
    <Header />
    <div className="middleSection">
      {/* Destination For Students */}
      <div className="destinationBox">
        <Destinations />
      </div>

      {/* Tropical Adventure For Students */}
      <div className="tropicalBox">
        <TropicalDestination />
      </div>

      {/* Our Destinations */}
      <div className="ourDestinationPlaces">
        <h1 className="destinationHeading">Our Destinations</h1>
        <OurDestination />
      </div>

      {/* Students Discounts */}
      <div className="studentsDiscounts">
        <StudentsDiscounts />
      </div>

      {/* Booking Details */}
      <div className="bookingDetailsBox">
        <BookNow />
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h1 className="testimony">Testimonials</h1>
        <Testimonials />
      </div>
    </div>
    <Footer />
  </div>
)

export default Home
