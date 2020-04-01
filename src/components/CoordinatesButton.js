import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    handleOnClick = (event) => {
        const array = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return (<button onClick={this.handleOnClick}>Coordinate Button</button>)
    }
}