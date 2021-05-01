import React, { Component } from 'react'
import store from '../redux/store'
import { updateName, updateProfessionalTitle, updateEmail, updatePhoneNumber, updateAddress, updatePitch } from '../redux/action'
import { connect } from "react-redux";

class Text extends Component {
    _onBlur = event => {
        const data = event.currentTarget.textContent;
        if (this.props.stateName === "name")
            store.dispatch(updateName(data));
        else if (this.props.stateName === "pitch")
            store.dispatch(updatePitch(data));
        else if (this.props.stateName === "professionalTitle")
            store.dispatch(updateProfessionalTitle(data));
        else if (this.props.stateName === "email")
            store.dispatch(updateEmail(data));
        else if (this.props.stateName === "phoneNumber")
            store.dispatch(updatePhoneNumber(data));
        else if (this.props.stateName === "address")
            store.dispatch(updateAddress(data));
    };

    render() {
        const Tag = this.props.tagName ? this.props.tagName : 'div';
        return (
            <Tag contentEditable="true"
                suppressContentEditableWarning="true"
                onBlur={event => this._onBlur(event)}
                placeholder={this.props.placeholder}
                className={this.props.className}>
                {this.props.value}
            </Tag>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    _onBlur: event => {
        const data = event.currentTarget.textContent;
        if (this.props.stateName === "name")
            dispatch(updateName(data));
        else if (this.props.stateName === "pitch")
            dispatch(updatePitch(data));
        else if (this.props.stateName === "professionalTitle")
            dispatch(updateProfessionalTitle(data));
        else if (this.props.stateName === "email")
            dispatch(updateEmail(data));
        else if (this.props.stateName === "phoneNumber")
            dispatch(updatePhoneNumber(data));
        else if (this.props.stateName === "address")
            dispatch(updateAddress(data));
    }
})

export default connect(null, mapDispatchToProps)(Text);

