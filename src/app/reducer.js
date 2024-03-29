import * as Actions from './actionType'

const initialState={
    user:{
        firstName:'',
        lastName:'',
        professionalTitle:''
    },
    contact:{
        email:'',
        phoneNumber:'',
        address:'',
    },
    titles:{
        workExperienceTitle:'EDUCATION',
        educationTitle:'WORK EXPERIENCE',
        skillsTitle:'SKILLS'
    },
    socialAccount:[],
    workExperience:[],
    education:[]
}

const pushSocialAccount=(payload)=> {
    if(pushSocialAccount.counter === undefined)
    {
        pushSocialAccount.counter=0;
    }
    return {...payload, id:pushSocialAccount.counter++};
};

const pushWorkExperience=(payload)=> {
    if(pushWorkExperience.counter === undefined)
    {
        pushWorkExperience.counter=0;
    }
    return {...payload, id:pushWorkExperience.counter++};
};

export default function reducer(state = initialState, action)
{
    switch (action.type) {
    case Actions.UPDATE_USER_DATA:
        return { ...state, 
            user:{
                ...state.user,
                ...action.payload
            } 
        };
    case Actions.UPDATE_CONTACT_DATA:
        return { ...state, 
            contact:{
                ...state.contact,
                ...action.payload
            } 
        };
    case Actions.UPDATE_TITLES:
        return {...state,
            titles:{
                ...state.titles,
                ...action.payload
            }
        };
    case Actions.ADD_SOCIAL_ACCOUNT_DATA:
        return { ...state, 
            socialAccount:[
                ...state.socialAccount,
                pushSocialAccount(action.payload)
            ]
        };

    case Actions.UPDATE_SOCIAL_ACCOUNT_DATA:
        return {...state,
            socialAccount:state.socialAccount.map(socialAccount=> socialAccount.id=== action.payload.id ? {...socialAccount,...action.payload} : socialAccount)
        };

    case Actions.DELETE_SOCIAL_ACCOUNT_DATA:
        return {...state,
            socialAccount:state.socialAccount.filter(socialAccount=> socialAccount.id!== action.payload.id)
        };

    case Actions.ADD_WORK_EXPERIENCE_DATA:
        return { ...state, 
            workExperience:[
                ...state.workExperience,
                pushWorkExperience(action.payload)
            ]
        };

    case Actions.UPDATE_WORK_EXPERIENCE_DATA:
        return {...state,
            workExperience:state.workExperience.map(workExp=> workExp.id=== action.payload.id ? {...workExp,...action.payload} : workExp)
        };

    case Actions.DELETE_WORK_EXPERIENCE_DATA:
        return {...state,
            workExperience:state.workExperience.filter(workExperience=> workExperience.id!== action.payload.id)
        };
    default:
        return state
    }
}
