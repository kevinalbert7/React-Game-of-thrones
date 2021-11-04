import React from 'react'

class Character extends React.Component {
	render() {
		return(
            <>
            <div>
			{this.props.name}
            </div>
            <div>
			{this.props.title}
            </div>
            <div>
			{this.props.image}
            </div>
            </>
		)
	}
}

export default Character