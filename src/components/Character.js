import React from 'react'

class Character extends React.Component {
	render() {
        console.log("this.props.image:", this.props.image)
		return(
            <>
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <img src={this.props.image}/>
                        </div>
                        <div class="col">
                        {this.props.title}
                        </div>
                        <div class="col">
                        {this.props.name}
                        </div>
                    </div>
                </div>
            </>
		)
	}
}

export default Character