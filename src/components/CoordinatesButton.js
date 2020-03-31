// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends React.Component {
    constructor (){
        super()
    }

    handleReceiveCoordinates = (event) => {
        //onReceiveCoordinates
        
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x,y])
    }

    render(){
        //console.log(this.props)
        return(
            <button onClick={this.handleReceiveCoordinates}/>
        )
    }
}
