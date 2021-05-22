import React, { Component } from 'react'
import styles from "./styles.module.css"
import ContactInfoPopUp from "../ContactInfoPopUp/ContactInfoPopUp";
import store from '../../redux/store';
export default class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            showPopUpForm: false
        };
    }

    makeURL = (contactInfo, accountName) => {
        if (contactInfo === "email")
            return "mailto:" + accountName;
        else if (contactInfo === "facebook")
            return "https://facebook.com/" + accountName;
        else if (contactInfo === "github")
            return "https://github.com/" + accountName;
        else if (contactInfo === "linkedin")
            return "https://linkedin.com/in/" + accountName;
        else if (contactInfo === "skype")
            return "skype:" + accountName;
        else if (contactInfo === "twitter")
            return "http://twitter.com/" + accountName;
        else if (contactInfo === "website")
            return "https://www." + accountName;

        return accountName;
    }

    getIcon = (contactInfo) => {
        if (contactInfo === "facebook")
            return "fab fa-facebook-f";
        else if (contactInfo === "github")
            return "fab fa-github";
        else if (contactInfo === "linkedin")
            return "fab fa-linkedin-in";
        else if (contactInfo === "skype")
            return "fab fa-skype";
        else if (contactInfo === "twitter")
            return "fab fa-twitter";
        else if (contactInfo === "website")
            return "fas fa-globe";

        return "";
    }

    togglePopUp = () => {
        this.setState({ showPopUpForm: !this.state.showPopUpForm })
    }

    render() {
        const mainContact = store.getState().mainContact;
        const socialAccount = store.getState().socialAccount;
        return (
            <div>
                {this.state.showPopUpForm && <ContactInfoPopUp className={styles.popUp} togglePopUp={() => { this.togglePopUp() }} />}
                <div className={styles.contact_info} onClick={() => { this.togglePopUp() }}>
                    <ul>
                        <li>
                            <div className={styles.icon}>
                                <i className="fas fa-phone"></i><span className={styles.data}>{mainContact.phoneNumber ? mainContact.phoneNumber : "Phone Number"}</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <i className="fas fa-at"></i><span className={styles.data}><a href={this.makeURL("email", mainContact.email)} target="_blank">{mainContact.email ? mainContact.email : "sample@mail.com"}</a></span>
                            </div>
                        </li>
                        {socialAccount.map(account => {
                            return (
                                < li >
                                    <div className={styles.icon}>
                                        <i className={this.getIcon(account.name)}></i><span className={styles.data}><a href={this.makeURL(account.name, account.url)} target="_blank">{account.url}</a></span>
                                    </div>
                                </li>
                            )
                        })}
                        <li>
                            <div className={styles.icon}>
                                <i className="fas fa-map-marker-alt"></i><span className={styles.data}>{mainContact.address ? mainContact.address : "Address"}</span>
                            </div>
                        </li>
                    </ul>
                </div >
            </div >
        )
    }
}
