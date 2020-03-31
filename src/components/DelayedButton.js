// Code DelayedButton Component Here

import React, {Component} from 'react'

export default class DelayedButton extends React.Component {
    constructor (){
        super()
    }

    handleonDelayedClick = (event) => {
        //console.log(this.props.delay)
        event.persist()
        setTimeout(() => console.log(this.props.onDelayedClick(event)), this.props.delay)
        // this.props.onDelayedClick(event)
        // console.log(event)
    }

    render(){
        return(
            <button onClick={this.handleonDelayedClick}/>
        )
    }
}


//event.persist()