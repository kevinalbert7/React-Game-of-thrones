import React from 'react'

import Character from './components/Character'

class App extends React.Component {
  constructor () {
    console.log("constructor")
    super ()

    this.state = {
      characters: []
    }

  }

  componentDidMount() {
    // console.log("component did mount!")
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(data => data.json()) // on transforme la donnée reçue en JSON 
    .then(data => {
      console.log("data:", data)
      this.setState({
        characters : data
      })
    })
    .catch(error => console.error(error))
  }

	render() {
    // console.log("this.state:", this.state)
		return (
      <>
			<h1>Game of thrones</h1>
      <Character/>
      </>
		)
	}
}

export default App