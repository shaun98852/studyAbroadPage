import './index.css'

const StudentsDiscounts = () => (
  <div className="studentsDiscounts">
    <div className="leftDiscount">
      <div className="rightSides">
        <div className="shapesBoxess">
          <div className="spheress">{null}</div>
          <div className="rightCircles">{null}</div>
        </div>
        <p className="destiParas">Get 20% off for student</p>
        <h1 className="adventureHeadingss">
          Students discounts available.
          <span className="spanElements">
            Get ready for some fun in the sun!
          </span>
        </h1>

        <ul className="ulLists">
          <li className="listItems">Lorem ipsum dolor sit amet</li>
          <li className="listItems">Massa quis natoque sit quam</li>
          <li className="listItems">Eros non pellentesque elit</li>
          <li className="listItems">tortor id euismod habitant</li>
          <li className="listItems">Sed suspendisse id in ultrices</li>
        </ul>
        <button className="ExploreMores" type="button">
          Explore More
        </button>
      </div>
    </div>

    <div className="rightDiscount">
      <img
        src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1693667626/Mask_group_wsinwp.png"
        className="discountImage"
        alt="images"
      />
    </div>
  </div>
)

export default StudentsDiscounts
