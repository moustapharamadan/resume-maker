import React, { Component } from 'react'
import styles from "./styles.module.css"

export default class ContactInfoPopUp extends Component {
    render() {
        return (
            <section className={styles.ContactInfoPopUp}>
                <h3>Main Contact</h3>
                <ul>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-phone" />
                            <div className={styles.input}>
                                <label>Phone Number</label>
                                <input placeholder="+0123456789" typeof="text" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-at" />
                            <div className={styles.input}>
                                <label>Email</label>
                                <input placeholder="sample@email.com" typeof="text" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <i class="fas fa-map-marker-alt" />
                            <div className={styles.input}>
                                <label>Address</label>
                                <input placeholder="Country, City" typeof="text" />
                            </div>
                        </div>
                    </li>
                </ul>
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <div className={styles.item}>
                            <input type="checkbox" id="linkedin"></input>
                            <div class="fab fa-linkedin-in" />
                            <div className={styles.input}>
                                <label>LinkedIn</label>
                                <input placeholder="" typeof="text" />
                            </div>
                        </div>
                    </li>
                </ul>
            </section >
        )
    }
}
