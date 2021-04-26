import React, { Component } from 'react'
import Switch from 'react-switch';
import store from '../../../redux/store'
import { updatePictureSectionStatus, updatePitchSectionStatus, updateWorkExperienceSectionStatus, updateEducationSectionStatus, updateSkillsSectionStatus } from '../../../redux/action'
import styles from "./styles.module.css"

export class SwitchButton extends Component {
    constructor(props) {
        super(props);
        const sectionStatus = store.getState().sectionStatus[this.props.name];
        this.state = { checked: sectionStatus };
    }

    static defaultProps = {
        width: 40,
        height: 20
    }

    updateStatus = (name) => {
        this.setState({ checked: !this.state.checked });
        if (name === "picture")
            store.dispatch(updatePictureSectionStatus(this.state.checked));
        else if (name === "pitch")
            store.dispatch(updatePitchSectionStatus(this.state.checked));
        else if (name === "workExperience")
            store.dispatch(updateWorkExperienceSectionStatus(this.state.checked));
        else if (name === "education")
            store.dispatch(updateEducationSectionStatus(this.state.checked));
        else if (name === "skills")
            store.dispatch(updateSkillsSectionStatus(this.state.checked));
    }

    render() {
        return (
            <div>
                <Switch
                    onChange={() => this.updateStatus(this.props.name)}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    checked={this.state.checked}
                    width={this.props.width}
                    height={this.props.height} />
                <span className={styles.switchText}>{this.props.children}</span>
            </div >
        )
    }
}
