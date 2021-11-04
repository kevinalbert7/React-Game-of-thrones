import React from 'react'

class Button extends React.Component {
    render() {
        console.log("render du component button:", this.props)
        // console.log("activeTab:", this.props.activeTab)
        const { handleClick, text, isSelected } = this.props
        console.log("isSelected:", isSelected)
    
        return (
            <button
                className={`me-2 btn btn-outline-primary ${isSelected === "add" && 'bg-primary text-white'}`}
                onClick={() => handleClick(text)}
            >
            {text}
            </button>
        );
    }
}

export default Button;