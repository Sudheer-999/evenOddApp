import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClicking = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  numStatus = () => {
    const {count} = this.state
    let status

    if (count % 2 === 0) {
      status = 'Even'
    } else {
      status = 'Odd'
    }

    return status
  }

  render() {
    const {count} = this.state
    const status = this.numStatus()

    return (
      <div className="bg-container">
        <h1 className="head1">Count {count}</h1>
        <p className="head2">Count is {status}</p>
        <button className="button" type="button" onClick={this.onClicking}>
          Increment
        </button>
        <p className="txt">*Increase by Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
