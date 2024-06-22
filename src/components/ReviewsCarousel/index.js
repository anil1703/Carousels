// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarouse extends Component {
  state = {count: 0}
  clickingLeft = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(PrevState => {
        return {count: PrevState.count - 1}
      })
    }
  }

  clickingRight = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(PrevState => {
        return {count: PrevState.count + 1}
      })
    }
  }

  render() {
    const {count} = this.state
    console.log(count)
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="home">
        <h1 className="head">Reviews</h1>
        <div className="box">
          <button
            data-testid="leftArrow"
            onClick={this.clickingLeft}
            className="btn-style"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="small-box">
            <img src={imgUrl} alt={username} className="img-style" />
            <p className="para-name">{username}</p>
            <p className="para">{companyName}</p>
            <p className="para">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            onClick={this.clickingRight}
            className="btn-style"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarouse
