import React, { Component } from 'react'
import { updateName, updateProfessionalTitle, updateEmail, updatePhoneNumber, updateAddress, updatePitch } from '../redux/action'
import { connect } from "react-redux";

class Text extends Component {
    render() {
        const Tag = this.props.tagName ? this.props.tagName : 'div';
        return (
            <Tag contentEditable="true"
                suppressContentEditableWarning="true"
                onBlur={event => this.props.onBlur(this.props.stateName, event)}
                placeholder={this.props.placeholder}
                className={this.props.className}>
                {this.props.value}
            </Tag>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onBlur: (stateName, event) => {
        const data = event.currentTarget.textContent;
        if (stateName === "name")
            dispatch(updateName(data));
        else if (stateName === "pitch")
            dispatch(updatePitch(data));
        else if (stateName === "professionalTitle")
            dispatch(updateProfessionalTitle(data));
        else if (stateName === "email")
            dispatch(updateEmail(data));
        else if (stateName === "phoneNumber")
            dispatch(updatePhoneNumber(data));
        else if (stateName === "address")
            dispatch(updateAddress(data));
    }
})

export default connect(null, mapDispatchToProps)(Text);

