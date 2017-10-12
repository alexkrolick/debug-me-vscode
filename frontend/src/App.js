import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {hello: null}

  fetchData () {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(({hello}) => this.setState({hello}))
      .catch(e => {
        this.setState({hello: 'Mars'})
      })
  }

  handleClick = () => {
    this.fetchData()
  }

  render () {
    const { hello } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Hello, { hello || '...' }!</h2>
        <p>
          <button className="App-load" onClick={this.handleClick}>
            Ask the backend to say hello
          </button>
        </p>
        <p>
          { hello ? hello === 'world' ? 'We ❤️ 🌍' : '🤔 Mars?' : '' }
        </p>
      </div>
    )
  }
}

export default App
