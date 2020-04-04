// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {


    passClick = (event) => {
        event.persist()
        let callBack = () => {
            this.props.onDelayedClick(event)
        }
        setTimeout(callBack, this.props.delay)
    }

    render(){
        return (
            <button onClick={this.passClick}/>
        )
    }
}