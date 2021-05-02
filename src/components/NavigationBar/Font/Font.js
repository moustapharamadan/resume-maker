import React, { Component } from 'react'
import styles from "./styles.module.css"

export default class Font extends Component {
    render() {
        return (
            <div className={styles.verticalMenu}>
                <ul>
                    <li>Asap</li>
                    <li>sans-serif</li>
                    <li>Roboto</li>
                    <li>Open Sans</li>
                    <li>Orelega One</li>
                    <li>Ubuntu</li>
                </ul>
            </div>
        )
    }
}
