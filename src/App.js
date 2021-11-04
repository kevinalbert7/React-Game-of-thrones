import React from 'react'

import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super () 
    
    this.state = {
      activeTab: "add",
      items: [],
    }
    

    this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  handleButtonClick(str) {
    console.log("handleButtonClick:", str)
    this.setState({activeTab: str})
  }

  addItem(name, price) {
    this.setState({items: [...this.state.items]})
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h1>Bakery</h1>
        </div>
        <Button
        text="add"
          handleClick={this.handleButtonClick}
        />
         <Button
        text="list"
          handleClick={this.handleButtonClick}
        />
         <Button
         text="pay"
          handleClick={this.handleButtonClick}
        />
        <div>
          {this.props.isSelected === "add" && <h1>Add</h1>}
          {this.props.isSelected === "list" && <h1>List</h1>}
          {this.props.isSelected === "pay" && <h1>Pay</h1>}
        </div>
        <Add
          addItem={this.addItem.value}
        />
        <List
          items
        />
      </div>
    );
  }

}

export default App