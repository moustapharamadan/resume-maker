import React, { Component } from 'react'
import styles from "./styles.module.css"

export default class ContactInfoPopUp extends Component {
    render() {
        return (
            <section className={styles.ContactInfoPopUp}>
                <ul className={styles.contactTab}>
                    <li>
                        <h3>Main Contact</h3>
                    </li>
                    <li>
                        <h3>Social Media</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-phone" />
                            <div className={styles.styledInput}>
                                <input type="text" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-at" />
                            <div className={styles.styledInput}>
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-map-marker-alt" />
                            <div className={styles.styledInput}>
                                <input type="text" required />
                                <label>Address</label>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className={styles.item}>
                            <input className={styles.checkbox} type="checkbox" id="linkedin" />
                            <i class="fab fa-linkedin-in" />
                            <div className={styles.styledInput}>
                                <input type="text" required />
                                <label>LinkedIn</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </section >
        )
    }
}
