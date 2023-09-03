import {TbDots} from 'react-icons/tb'

import './index.css'

const OurDestination = () => (
  <ul className="ourDestination">
    <li className="eachDestination">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693667610/card-image_sgv3y1.png"
        className="universityImage"
        alt="images"
      />
      <div className="bottomSections">
        <h1 className="headingDestination">Harward University</h1>
        <div className="bottomSection">
          <p className="universityPara">Cambridge, Massachusetts, UK</p>
          <div className="dotsBox">
            <TbDots />
          </div>
        </div>
      </div>
    </li>

    <li className="eachDestination">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693667604/card-image_1_xmtp5t.png"
        className="universityImage"
        alt="images"
      />
      <div className="bottomSections">
        <h1 className="headingDestination">Oxford University</h1>
        <div className="bottomSection">
          <p className="universityPara">Oxford, England</p>
          <div className="dotsBox">
            <TbDots />
          </div>
        </div>
      </div>
    </li>

    <li className="eachDestination">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693667601/card-image_2_ltrmbw.png"
        className="universityImage"
        alt="images"
      />
      <div className="bottomSections">
        <h1 className="headingDestination">Stanford University</h1>
        <div className="bottomSection">
          <p className="universityPara">Stanford, California</p>
          <div className="dotsBox">
            <TbDots />
          </div>
        </div>
      </div>
    </li>

    <li className="eachDestination">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693667610/card-image_sgv3y1.png"
        className="universityImage"
        alt="images"
      />
      <div className="bottomSections">
        <h1 className="headingDestination">Nanyang Technology</h1>
        <div className="bottomSection">
          <p className="universityPara">Nanyang Ave, Singapura</p>
          <div className="dotsBox">
            <TbDots />
          </div>
        </div>
      </div>
    </li>
  </ul>
)

export default OurDestination
