import React from 'react'

import Character from './components/Character'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      characters: [],
      favorites: [],
    }
    
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)

  }


  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(data => data.json())
    .then(data => {
      console.log("data:", data)
      this.setState({
        characters : data
      })
    })
    .catch(error => console.error(error))
  }

  
  handleFavoriteClick(e) {
    // console.log("handleFavoriteClick=", handleFavoriteClick)
    e.preventDefault()
    this.setState({ favorites: [, ...this.state.favorites] })
  }

	render() {
    console.log("le state du render de App=", this.state)
		return (
      <div>
        <h1>Game of thrones</h1>
          {this.state.characters.map( character => (
            <Character 
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              handleFavoriteClick={this.props.Character}
            />
          ))}
            <Button/>
          <div>
            {this.state.favorites}
          </div>
      </div>
		)
	}
}

export default App