import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import { connect } from "react-redux";
import { updateColor } from '../../../redux/action';

class ColorPicker extends Component {
    render() {
        return (
            <div>
                <ChromePicker color={this.props.color} onChange={(color) => { this.props.updateColor(color.hex) }} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateColor: (color) => {
        dispatch(updateColor(color));
    }
})
const mapStateToProps = (state) => ({
    color: state.color
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);