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

class SocialMediaField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushToRedux: false,
            fieldContent: ''
        }
    }
    render() {
        return (
            <div className={styles.item}>
                <input className={styles.checkbox} type="checkbox" onChange={(event) => {
                    this.setState({ pushToRedux: event.target.checked });
                    this.props.onBlur(this.props.name, event.target.checked ? this.state.fieldContent : '');
                }
                } />
                <i className={this.props.icon} />
                <div className={styles.styledInput} onBlur={(event) => {
                    this.setState({ fieldContent: event.target.value });
                    this.props.onBlur(this.props.name, this.state.pushToRedux ? event.target.value : '');
                }
                } >
                    <input type="text" required />
                    <label>{this.props.children}</label>
                </div>
            </div>
        )
    }
}
class SocialMedia extends Component {
    render() {
        return (
            <ul>
                <li>
                    <SocialMediaField name="facebook" icon="fab fa-facebook-f" onBlur={this.props.onBlur}>Facebook</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="github" icon="fab fa-github" onBlur={this.props.onBlur}>GitHub</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="linkedin" icon="fab fa-linkedin-in" onBlur={this.props.onBlur}>LinkedIn</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="stackOverflow" icon="fab fa-stack-overflow" onBlur={this.props.onBlur}>Stack Overflow</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="skype" icon="fab fa-skype" onBlur={this.props.onBlur}>Skype</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="twitter" icon="fab fa-twitter" onBlur={this.props.onBlur}>Twitter</SocialMediaField>
                </li>
                <li>
                    <SocialMediaField name="website" icon="fas fa-globe" onBlur={this.props.onBlur}>Website</SocialMediaField>
                </li>
            </ul>
        )
    }
}
class ContactInfoPopUp extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            showMainContact: true
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            console.log("Outside");
            this.props.togglePopUp();
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        return (
            <div className={this.props.className} >
                <div className={styles.ContactInfoPopUp} ref={this.wrapperRef}>
                    <ul className={styles.contactTab}>
                        <li className={this.state.showMainContact ? styles.active : ""} onClick={() => this.setState({ showMainContact: true })}>
                            <h3>Main Contact</h3>
                        </li>
                        <li className={!this.state.showMainContact ? styles.active : ""} onClick={() => this.setState({ showMainContact: false })}>
                            <h3>Social Media</h3>
                        </li>
                    </ul>
                    {
                        this.state.showMainContact ? <MainContact onBlur={this.props.updateMainContact} /> : <SocialMedia onBlur={this.props.updateSocialMedia} />
                    }
                </div >
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    updateSocialMedia: (stateName, data) => {
        console.log(stateName, data);
        if (["facebook", "github", "linkedin", "stackOverflow", "skype", "twitter", "website"].includes(stateName)) {
            dispatch(deleteSocialAccount(stateName));
            if (data.trim()) {
                dispatch(initSocialAccount(stateName, data));
            }
        }
    },
    updateMainContact: (stateName, event) => {
        const data = event.target.value;
        console.log(stateName, data);
        if (stateName === "email")
            dispatch(updateEmail(data));
        else if (stateName === "phoneNumber")
            dispatch(updatePhoneNumber(data));
        else if (stateName === "address")
            dispatch(updateAddress(data));
    }
})

export default connect(null, mapDispatchToProps)(ContactInfoPopUp);