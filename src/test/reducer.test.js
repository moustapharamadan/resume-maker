import reducer from '../app/reducer';
import * as actions from '../app/action';

const initialStoreState={
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
};

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialStoreState)
});

const updatedUserData={
    user:{
        firstName:'MyFirstName',
        lastName:'MyLastName',
        professionalTitle:'Software Developer'
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
};

it('should update user data', () => {
    let result= reducer(undefined, actions.updateFirstName('MyFirstName'));
    result=reducer(result, actions.updateLastName('MyLastName'));
    result=reducer(result,actions.updateProfessionalTitle('Software Developer'));
    expect(result).toEqual(updatedUserData);
});

const updatedContactData={
    user:{
        firstName:'',
        lastName:'',
        professionalTitle:''
    },
    contact:{
        email:'email@example.com',
        phoneNumber:'+0123456789',
        address:'Somewhere On Earth',
    },
    titles:{
        workExperienceTitle:'EDUCATION',
        educationTitle:'WORK EXPERIENCE',
        skillsTitle:'SKILLS'
    },
    socialAccount:[],
    workExperience:[],
    education:[]
};

it('should update contact data', () => {
    let result= reducer(undefined, actions.updateEmail('email@example.com'));
    result=reducer(result, actions.updatePhoneNumber('+0123456789'));
    result=reducer(result,actions.updateAddress('Somewhere On Earth'));
    expect(result).toEqual(updatedContactData);
});

const updatedTitles={
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
        workExperienceTitle:'Professional Experience',
        educationTitle:'Education',
        skillsTitle:'Software Skills'
    },
    socialAccount:[],
    workExperience:[],
    education:[]
};

it('should update section titles', () => {
    let result= reducer(undefined, actions.updateWorkExperienceTitle('Professional Experience'));
    result=reducer(result, actions.updateEducationTitle('Education'));
    result=reducer(result,actions.updateSkillsTitle('Software Skills'));
    expect(result).toEqual(updatedTitles);
});

const updatedSocialAccountData={
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
    socialAccount:[{id:1,name:'Stackoverflow', url:'my-stackoverflow-account'},
                    {id:2,name:'Youtube', url:'my-youtube-account'}],
    workExperience:[],
    education:[]
};

it('should update social account', () => {
    let result= reducer(undefined, actions.addSocialAccount());
    result=reducer(result,actions.updateSocialAccount(0,{name:'Linkedin', url:'my-linkedin-account'}));
    result= reducer(result, actions.addSocialAccount());
    result=reducer(result,actions.updateSocialAccount(1,{name:'GitHub'}));
    result=reducer(result,actions.updateSocialAccount(1,{url:'my-github-account'}));
    result= reducer(result, actions.addSocialAccount());
    result=reducer(result,actions.updateSocialAccount(2,{name:'Youtube', url:'my-youtube-account'}));
    result= reducer(result, actions.updateSocialAccount(1,{name:'Stackoverflow', url:'my-stackoverflow-account'}));
    result= reducer(result, actions.deleteSocialAccount(0));
    expect(result).toEqual(updatedSocialAccountData);
});

const updatedSocialWorkExperience={
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
    workExperience:[{id:0,
                    position:'Software Developer',
                    workplace:'Company',
                    startDate:'',
                    endDate:'',
                    location:'Somewhere On Earth',
                    companyDescription:'',
                    accomplishment:''},
                    {
                    id:2,
                    position:'',
                    workplace:'',
                    startDate:'',
                    endDate:'',
                    location:'',
                    companyDescription:'',
                    accomplishment:''
                    }],
    education:[]
};

it('should update work experience', () => {
    let result= reducer(undefined, actions.addWorkExperience());
    result= reducer(result, actions.updateWorkExperience(0,{position:'Software Developer',location:'Somewhere On Earth'}));
    result= reducer(result, actions.addWorkExperience());
    result= reducer(result, actions.updateWorkExperience(0,{workplace:'Company'}));
    result= reducer(result, actions.addWorkExperience());
    result=reducer(result,actions.deleteWorkExperience(1));
    expect(result).toEqual(updatedSocialWorkExperience);
});
