import React, { Component } from 'react'
import { SwitchButton } from '../SwitchButton/SwitchButton'
import styles from "./styles.module.css"

export class Section extends Component {
    render() {
        return (
            <div className={styles.sectionBox}>
                <ul>
                    <div>
                        <li><SwitchButton name="picture" >Profile Picture</SwitchButton></li>
                        <li><SwitchButton name="workExperience" >Work Experience</SwitchButton></li>
                        <li><SwitchButton name="pitch" >Summary/Pitch</SwitchButton></li>
                    </div>
                    <div>
                        <li><SwitchButton name="education" >Education</SwitchButton></li>
                        <li><SwitchButton name="skills" >Skills</SwitchButton></li>
                    </div>
                </ul>
            </div>
        )
    }
}

