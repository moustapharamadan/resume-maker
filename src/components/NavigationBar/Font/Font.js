import React, { Component } from 'react'
import { updateFontFamily } from '../../../redux/action';
import styles from "./styles.module.css"
import { connect } from "react-redux";

class Font extends Component {
    render() {
        return (
            <div className={styles.verticalMenu}>
                <ul>
                    <li onClick={() => this.props.updateFontFamily("Asap")} style={{ fontFamily: 'Asap' }}>Asap</li>
                    <li onClick={() => this.props.updateFontFamily("sans-serif")} style={{ fontFamily: "sans-serif" }}>Sans Serif</li>
                    <li onClick={() => this.props.updateFontFamily("Roboto")} style={{ fontFamily: "Roboto" }}>Roboto</li>
                    <li onClick={() => this.props.updateFontFamily("Open Sans")} style={{ fontFamily: "Open Sans" }}>Open Sans</li>
                    <li onClick={() => this.props.updateFontFamily("Orelega One")} style={{ fontFamily: "Orelega One" }}>Orelega One</li>
                    <li onClick={() => this.props.updateFontFamily("Ubuntu")} style={{ fontFamily: "Ubuntu" }}>Ubuntu</li>
                </ul>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateFontFamily: (fontName) => {
        dispatch(updateFontFamily(fontName));
    }
})
const mapStateToProps = (state) => ({
    sectionStatus: state.sectionStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(Font);
