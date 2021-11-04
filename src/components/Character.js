import React from 'react'

class Character extends React.Component {
	render() {
        console.log("props favorites dans le render de Character", this.props.favorites)
		return(
            <div className="container">
                <div className="row ">
                    <div className="card col-4">
                        <img src={this.props.image}/>
                        <p>{this.props.title}</p>
                        <p>{this.props.name}</p>
                        <button 
                            className="btn btn-outline-secondary"
                            onClick={this.props.favorites}
                            >Favorite
                        </button>
                    </div>
                </div>
            </div>
		)
	}
}

export default Character