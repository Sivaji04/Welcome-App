import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {
    isSubscribed: false,
  }

  changedValue = () => {
    const {isSubscribed} = this.state
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {isSubscribed} = this.state
    const text = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button onClick={this.changedValue} type="button" className="button">
          {text}
        </button>
      </div>
    )
  }
}
export default App
