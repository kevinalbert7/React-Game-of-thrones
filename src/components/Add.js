import React from 'react'

class Add extends React.Component {
    constructor () {
        super ()

        this.state = {
        name: "",
        price: 0
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)

    }

    handleNameChange(e) {
        console.log("handleNameChange:",e)
        this.setState({name: e.target.value})
    }

    handlePriceChange(e) {
        console.log("handlePriceChange:",e)
        this.setState({price: e.target.value})
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <h1>Add</h1>
                    <div className="col-10">
                        <input 
                            type="text"
                            className="form-control" 
                            onChange={this.state.handleNameChange}
                        >
                        </input>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <button 
                            className="btn btn-primary"
                            onClick={() => this.props.addItem}>
                            add
                        </button>
                    </div>
                    <div>
                        <input 
                            type="range" 
                            class="form-range" 
                            minValue={0} 
                            maxValue={10}
                            onChange={this.state.handlePriceChange}
                        >
                        </input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add