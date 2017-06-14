import React,  {Component} from 'react'
import ReactDOM from 'react-dom'
import Container from './containers/container'

class App extends Component {
	render() {
    return <Container />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
