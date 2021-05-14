import * as Actions from './actionType'

const initialState = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: '',
    },
    mainContact: {
        email: '',
        phoneNumber: '',
        address: '',
    },
    titles: {
        workExperienceTitle: 'EDUCATION',
        educationTitle: 'WORK EXPERIENCE',
        skillsTitle: 'SKILLS'
    },
    socialAccount: [],
    workExperience: [],
    education: [],
    sectionStatus: {
        picture: false,
        pitch: false,
        workExperience: true,
        education: true,
        skills: true
    },
    fontFamily: 'sans-serif',
    color: '#f25547'
}

const pushWorkExperience = (payload) => {
    if (pushWorkExperience.counter === undefined) {
        pushWorkExperience.counter = 0;
    }
    return { ...payload, id: pushWorkExperience.counter++ };
};

const pushEducation = (payload) => {
    if (pushEducation.counter === undefined) {
        pushEducation.counter = 0;
    }
    return { ...payload, id: pushEducation.counter++ };
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Actions.UPDATE_USER_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        case Actions.UPDATE_CONTACT_DATA:
            return {
                ...state,
                mainContact: {
                    ...state.mainContact,
                    ...action.payload
                }
            };
        case Actions.UPDATE_TITLES:
            return {
                ...state,
                titles: {
                    ...state.titles,
                    ...action.payload
                }
            };
        case Actions.ADD_SOCIAL_ACCOUNT_DATA:
            return {
                ...state,
                socialAccount: [
                    ...state.socialAccount,
                    { ...action.payload }
                ]
            };

        case Actions.UPDATE_SOCIAL_ACCOUNT_DATA:
            return {
                ...state,
                socialAccount: state.socialAccount.map(socialAccount => socialAccount.name === action.payload.name ? { ...socialAccount, ...action.payload } : socialAccount)
            };

        case Actions.DELETE_SOCIAL_ACCOUNT_DATA:
            return {
                ...state,
                socialAccount: state.socialAccount.filter(socialAccount => socialAccount.name !== action.payload.name)
            };

        case Actions.ADD_WORK_EXPERIENCE_DATA:
            return {
                ...state,
                workExperience: [
                    ...state.workExperience,
                    pushWorkExperience(action.payload)
                ]
            };

        case Actions.UPDATE_WORK_EXPERIENCE_DATA:
            return {
                ...state,
                workExperience: state.workExperience.map(workExp => workExp.id === action.payload.id ? { ...workExp, ...action.payload } : workExp)
            };

        case Actions.DELETE_WORK_EXPERIENCE_DATA:
            return {
                ...state,
                workExperience: state.workExperience.filter(workExperience => workExperience.id !== action.payload.id)
            };
        case Actions.ADD_EDUCATION_DATA:
            return {
                ...state,
                education: [
                    ...state.education,
                    pushEducation(action.payload)
                ]
            };

        case Actions.UPDATE_EDUCATION_DATA:
            return {
                ...state,
                education: state.education.map(education => education.id === action.payload.id ? { ...education, ...action.payload } : education)
            };

        case Actions.DELETE_EDUCATION_DATA:
            return {
                ...state,
                education: state.education.filter(education => education.id !== action.payload.id)
            };
        case Actions.UPDATE_SECTION_STATUS:
            return {
                ...state,
                sectionStatus: {
                    ...state.sectionStatus,
                    ...action.payload
                }
            };
        case Actions.UPDATE_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.payload
            }
        case Actions.UPDATE_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state
    }
}
