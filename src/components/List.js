import React from 'react'

class List extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="">
                        <h1>List</h1>
                            <ul className="list-group">
                            {this.props.items.map((item, index) => (
                                <li key={index} className="list-group-item">
                                </li>
                            ))}
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default List