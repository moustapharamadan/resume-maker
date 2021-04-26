import React, { Component } from 'react'
import Switch from 'react-switch';
import store from '../../../redux/store'
import {updatePictureSectionStatus} from '../../../redux/action'

export class SwitchButton extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    }
    
    updateStatus=(name)=>
    {
        this.setState({ checked:!this.state.checked });
        if( name === "picture")
        {
            console.log("hhhh")
            store.dispatch(updatePictureSectionStatus(this.state.checked));
        }
    }
    render() {
        return (
            <div>
                <Switch
                    onChange={() => this.updateStatus(this.props.name)}
                    checked={this.state.checked}/>
            </div>
        )
    }
}
