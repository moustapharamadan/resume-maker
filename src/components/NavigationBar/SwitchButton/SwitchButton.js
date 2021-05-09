import React, { Component } from 'react'
import Switch from 'react-switch';
import { updatePictureSectionStatus, updatePitchSectionStatus, updateWorkExperienceSectionStatus, updateEducationSectionStatus, updateSkillsSectionStatus } from '../../../redux/action'
import styles from "./styles.module.css"
import { connect } from "react-redux";

class SwitchButton extends Component {

    static defaultProps = {
        width: 40,
        height: 20
    }

    render() {
        const name = this.props.name;
        const status = this.props.sectionStatus[name];
        return (
            <div className={styles.switchButton}>
                <Switch
                    onChange={() => this.props.updateStatus(name, !status)}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    checked={status}
                    width={this.props.width}
                    height={this.props.height} />
                <span className={styles.switchText}>{this.props.children}</span>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateStatus: (name, status) => {
        if (name === "picture")
            dispatch(updatePictureSectionStatus(status));
        else if (name === "pitch")
            dispatch(updatePitchSectionStatus(status));
        else if (name === "workExperience")
            dispatch(updateWorkExperienceSectionStatus(status));
        else if (name === "education")
            dispatch(updateEducationSectionStatus(status));
        else if (name === "skills")
            dispatch(updateSkillsSectionStatus(status));
    }
})
const mapStateToProps = (state) => ({
    sectionStatus: state.sectionStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);