// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    
    handleClickEvent = (e) => {
        let mouseCoords = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(mouseCoords)
    }
    
    render(){
        return <button onClick={this.handleClickEvent}></button>
    }
}

