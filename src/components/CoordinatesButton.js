import React, { Component } from 'react';

class CoordinateButton extends Component {

    handleClick = (event) => {
        const array = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(array);
    }

    render() {
        return <button onClick={this.handleClick}>My Button!</button>
    }
}

export default CoordinateButton;