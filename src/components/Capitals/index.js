import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {id: 'NEW_DELHI'}

  onChangeCapital = event => {
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    const item = countryAndCapitalsList.filter(eachItem => eachItem.id === id)
    console.log(id)
    console.log(item[0])
    return (
      <div className="background-container">
        <div className="main-container">
          <h1>Countries And Capitals</h1>
          <div className="capital-description">
            <select className="select-style" onChange={this.onChangeCapital}>
              <option value="NEW_DELHI">New Delhi</option>
              <option value="LONDON">London</option>
              <option value="PARIS">Paris</option>
              <option value="KATHMANDU">Kathmandu</option>
              <option value="HELSINKI">Helsinki</option>
            </select>
            <p>is capital of which country?</p>
          </div>
          <h2 className="country">{item[0].country}</h2>
        </div>
      </div>
    )
  }
}

export default Capitals
