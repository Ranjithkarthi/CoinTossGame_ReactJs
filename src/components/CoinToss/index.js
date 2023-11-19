// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const {tossResult, heads, tails} = this.state
    const tossChangedResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      tossResult: tossChangedResult,
      heads: tossChangedResult === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossChangedResult === 1 ? prevState.tails + 1 : prevState.tails,
    }))
  }

  render() {
    const {tossResult, heads, tails} = this.state

    const total = heads + tails

    const imgResult =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="toss-card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgResult} className="coin-img" alt="Toss Result" />
          <button type="button" className="btn" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score-spacing">Total:{total}</p>
            <p className="score-spacing">Heads:{heads}</p>
            <p className="score-spacing">tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
