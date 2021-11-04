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
      this.setState({ characters : data })
    })
    .catch(error => console.error(error))
  }

  
  handleFavoriteClick(index) {
    const { fullName, title, imageUrl } = this.state.characters[index]
    const newFavorite = {
      fullName: fullName,
      title: title,
      image: imageUrl,
      isAdd: true
    }

    this.setState({favorites: [...this.state.favorites, newFavorite]})
  }

	render() {
    console.log("le state du render de App=", this.state)

    const { characters } = this.state

		return (
      <div className="container">
        <h1>Game of thrones</h1>
          {characters.map( character => (
            <Character 
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              handleFavoriteClick={this.handleFavoriteClick}
              isFavorite={this.state.favorites.isAdd}
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