import React, { Component } from 'react'
import styles from "./styles.module.css"

export default class ContactInfo extends Component {
    render() {
        return (
            <section class={styles.contact_info}>
                <ul>
                    <li>
                        <div class={styles.icon}>
                            <i class="fas fa-phone"></i><span class={styles.data} contenteditable="true" ></span>
                        </div>
                    </li>
                    <li>
                        <div class={styles.icon}>
                            <i class="fas fa-at"></i><span class={styles.data}><a href="mailto:moustapharamadan@hotmail.com" target="_blank">moustapharamadan@hotmail.com</a></span>
                        </div>
                    </li>
                    <li>
                        <div class={styles.icon}>
                            <i class="fab fa-linkedin-in"></i><span class={styles.data}><a href="https://linkedin.com/in/moustapha-ramadan" target="_blank">moustapha-ramadan</a></span>
                        </div>
                    </li>
                    <li>
                        <div class={styles.icon}>
                            <i class="fas fa-map-marker-alt"></i><span class={styles.data}>Lebanon, Beirut</span>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
