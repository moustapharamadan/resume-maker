import React, { Component } from 'react'
import styles from "./styles.module.css"
import ContactInfoPopUp from "../ContactInfoPopUp/ContactInfoPopUp";
import store from '../../redux/store';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}
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

    togglePopUp = () => {
        this.setState({ showPopUpForm: !this.state.showPopUpForm })
    }

    render() {
        return (
            <div>
                {this.state.showPopUpForm && <ContactInfoPopUp className={styles.popUp} togglePopUp={() => { this.togglePopUp() }} />}
                <div class={styles.contact_info} onClick={() => { this.togglePopUp() }}>
                    <ul>
                        <li>
                            <div class={styles.icon}>
                                <i class="fas fa-phone"></i><span class={styles.data}>{store.getState().mainContact.phoneNumber}</span>
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
                </div >
            </div>
        )
    }
}
