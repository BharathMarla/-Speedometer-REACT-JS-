// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="description">
            Speed is <span className="span-element">{count}</span>mph
          </h1>
          <p className="description-2">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="button-container">
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="button2"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
          <p className="author">Developed by : Bharath Marla</p>
        </div>
      </div>
    )
  }
}
export default Speedometer
