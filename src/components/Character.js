import React from 'react'

class Character extends React.Component {
	render() {
        console.log("props favorites dans le render de Character", this.props.favorites)

        const {image, title, name, index} = this.props

		return(
            <div className="container">
                <div className="row ">
                    <div className="card col-4">
                        <img src={image} alt=""/>
                        <p>{title}</p>
                        <p>{name}</p>
                        <button 
                            className="btn btn-outline-secondary"
                            onClick={() => this.props.handleFavoriteClick}
                            >Favorite
                        </button>
                    </div>
                </div>
            </div>
		)
	}
}

export default Character