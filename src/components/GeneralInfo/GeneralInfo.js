import React, { Component } from 'react'
import {Text} from '../Text'
import styles from"./generalInfoStyles.module.css"

export class GeneralInfo extends Component {    
    render() {
        return (
            <div>
                <div className={styles.cv_title}>
                    <Text className={styles.name} stateName="name" placeholder="Your Name"/>
                    <Text className={styles.position} stateName="professionalTitle" placeholder="Professional Title"/>
                    <Text className={styles.pitch} stateName="pitch" placeholder="Pitch/Summary"/>
                </div>
                <div className="profile_pic">
                    <img src="" alt=""/>
                </div>
            </div>
        )
    }
}
