import React, { Component } from 'react'
import styles from "./styles.module.css"
import { updateEmail, updatePhoneNumber, updateAddress, initSocialAccount, deleteSocialAccount } from '../../redux/action'
import { connect } from "react-redux";

class MainContact extends Component {
    render() {
        return (
            <ul>
                <li>
                    <div className={styles.item} onBlur={(event) => { this.props.onBlur("phoneNumber", event); }}>
                        <i className="fas fa-phone" />
                        <div className={styles.styledInput}>
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item} onBlur={(event) => { this.props.onBlur("email", event); }}>
                        <i className="fas fa-at" />
                        <div className={styles.styledInput}>
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item} onBlur={(event) => { this.props.onBlur("address", event); }}>
                        <i className="fas fa-map-marker-alt" />
                        <div className={styles.styledInput}>
                            <input type="text" required />
                            <label>Address</label>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}
class SocialMedia extends Component {
    render() {
        return (
            <ul>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="linkedin" />
                        <i className="fab fa-linkedin-in" />
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("linkedin", event); }}>
                            <input type="text" required />
                            <label>LinkedIn</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="website" />
                        <i className="fas fa-globe"></i>
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("website", event); }}>
                            <input type="text" required />
                            <label>Website</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="twitter" />
                        <i className="fab fa-twitter"></i>
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("twitter", event); }}>
                            <input type="text" required />
                            <label>Twitter</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="facebook" />
                        <i className="fab fa-facebook-f"></i>
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("facebook", event); }}>
                            <input type="text" required />
                            <label>Facebook</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="github" />
                        <i className="fab fa-github"></i>
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("github", event); }}>
                            <input type="text" required />
                            <label>GitHub</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <input className={styles.checkbox} type="checkbox" id="stackOverflow" />
                        <i className="fab fa-stack-overflow"></i>
                        <div className={styles.styledInput} onBlur={(event) => { this.props.onBlur("stackOverflow", event); }}>
                            <input type="text" required />
                            <label>Stack Overflow</label>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}
class ContactInfoPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMainContact: true
        }
    }
    render() {
        return (
            <section className={styles.ContactInfoPopUp}>
                <ul className={styles.contactTab}>
                    <li>
                        <h3 onClick={() => this.setState({ showMainContact: true })}>Main Contact</h3>
                    </li>
                    <li>
                        <h3 onClick={() => this.setState({ showMainContact: false })}>Social Media</h3>
                    </li>
                </ul>
                {
                    this.state.showMainContact ? <MainContact onBlur={this.props.onBlur} /> : <SocialMedia onBlur={this.props.onBlur} />
                }
            </section >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onBlur: (stateName, event) => {
        console.log(event);
        const data = event.target.value;
        if (stateName === "email")
            dispatch(updateEmail(data));
        else if (stateName === "phoneNumber")
            dispatch(updatePhoneNumber(data));
        else if (stateName === "address")
            dispatch(updateAddress(data));
        else if (["linkedin", "website", "twitter", "facebook", "github", "stackOverflow"].includes(stateName)) {
            dispatch(deleteSocialAccount(stateName));
            dispatch(initSocialAccount(stateName, data));
        }
    }
})

export default connect(null, mapDispatchToProps)(ContactInfoPopUp);