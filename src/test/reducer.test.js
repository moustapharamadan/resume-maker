import reducer from '../redux/reducer';
import * as actions from '../redux/action';

const initialStoreState = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
};

it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStoreState)
});

const updatedUserData = {
    user: {
        name: 'MyFirstName MyLastName',
        professionalTitle: 'Software Developer',
        pitch: 'Short and engaging summanry/pitch about yourself'
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
};

it('should update user data', () => {
    let result = reducer(undefined, actions.updateName('MyFirstName MyLastName'));
    result = reducer(result, actions.updateProfessionalTitle('Software Developer'));
    result = reducer(result, actions.updatePitch('Short and engaging summanry/pitch about yourself'));
    expect(result).toEqual(updatedUserData);
});

const updatedContactData = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
    },
    mainContact: {
        email: 'email@example.com',
        phoneNumber: '+0123456789',
        address: 'Somewhere On Earth',
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
};

it('should update mainContact data', () => {
    let result = reducer(undefined, actions.updateEmail('email@example.com'));
    result = reducer(result, actions.updatePhoneNumber('+0123456789'));
    result = reducer(result, actions.updateAddress('Somewhere On Earth'));
    expect(result).toEqual(updatedContactData);
});

const updatedTitles = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
    },
    mainContact: {
        email: '',
        phoneNumber: '',
        address: '',
    },

    titles: {
        workExperienceTitle: 'Professional Experience',
        educationTitle: 'Education',
        skillsTitle: 'Software Skills'
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
};

it('should update section titles', () => {
    let result = reducer(undefined, actions.updateWorkExperienceTitle('Professional Experience'));
    result = reducer(result, actions.updateEducationTitle('Education'));
    result = reducer(result, actions.updateSkillsTitle('Software Skills'));
    expect(result).toEqual(updatedTitles);
});

const updatedSocialAccountData = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
    socialAccount: [{ name: 'Stackoverflow', url: 'my-stackoverflow-account' },
    { name: 'Youtube', url: 'my-youtube-account' }],
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
};

it('should update social account', () => {
    let result = reducer(undefined, actions.initSocialAccount('Linkedin', 'my-linkedin-account'));
    result = reducer(result, actions.initSocialAccount('Stackoverflow', ''));
    result = reducer(result, actions.initSocialAccount('GitHub', ''));
    result = reducer(result, actions.updateSocialAccount('GitHub', 'my-github-account'));
    result = reducer(result, actions.initSocialAccount('Youtube', 'my-youtube-account'));
    result = reducer(result, actions.deleteSocialAccount('Linkedin'));
    result = reducer(result, actions.updateSocialAccount('Stackoverflow', 'my-stackoverflow-account'));
    result = reducer(result, actions.deleteSocialAccount('GitHub'));
    expect(result).toEqual(updatedSocialAccountData);
});

const updatedSocialWorkExperience = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
    workExperience: [{
        id: 0,
        position: 'Software Developer',
        workplace: 'Company',
        startDate: '',
        endDate: '',
        location: 'Somewhere On Earth',
        companyDescription: '',
        accomplishment: ''
    },
    {
        id: 2,
        position: '',
        workplace: '',
        startDate: '',
        endDate: '',
        location: '',
        companyDescription: '',
        accomplishment: ''
    }],
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
};

it('should update work experience', () => {
    let result = reducer(undefined, actions.addWorkExperience());
    result = reducer(result, actions.updateWorkExperience(0, { position: 'Software Developer', location: 'Somewhere On Earth' }));
    result = reducer(result, actions.addWorkExperience());
    result = reducer(result, actions.updateWorkExperience(0, { workplace: 'Company' }));
    result = reducer(result, actions.addWorkExperience());
    result = reducer(result, actions.deleteWorkExperience(1));
    expect(result).toEqual(updatedSocialWorkExperience);
});

const updatedEducation = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
    education: [
        {
            id: 0,
            studyProgram: 'University',
            institution: 'ABC',
            startDate: '2020/01/01',
            endDate: '',
            description: '',
            additionalData: ''
        },
        {
            id: 2,
            studyProgram: '',
            institution: '',
            startDate: '',
            endDate: '',
            description: '',
            additionalData: ''
        }
    ],
    sectionStatus: {
        picture: false,
        pitch: false,
        workExperience: true,
        education: true,
        skills: true
    },
    fontFamily: 'sans-serif',
    color: '#f25547'
};

it('should update education', () => {
    let result = reducer(undefined, actions.addEducation());
    result = reducer(result, actions.updateEducation(0, { studyProgram: 'University', institution: 'ABC' }));
    result = reducer(result, actions.addEducation());
    result = reducer(result, actions.updateEducation(0, { startDate: '2020/01/01' }));
    result = reducer(result, actions.addEducation());
    result = reducer(result, actions.deleteEducation(1));
    expect(result).toEqual(updatedEducation);
});

const updatedSectionStatus = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
        picture: true,
        pitch: true,
        workExperience: false,
        education: false,
        skills: false
    },
    fontFamily: 'sans-serif',
    color: '#f25547'
};

it('should update section status', () => {
    let result = reducer(undefined, actions.updatePictureSectionStatus(true));
    result = reducer(result, actions.updatePitchSectionStatus(true));
    result = reducer(result, actions.updateWorkExperienceSectionStatus(false));
    result = reducer(result, actions.updateEducationSectionStatus(false));
    result = reducer(result, actions.updateSkillsSectionStatus(false));
    expect(result).toEqual(updatedSectionStatus);
});

const updatedFontFamily = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
    fontFamily: 'Asap',
    color: '#f25547'
};

it('should update font family', () => {
    let result = reducer(undefined, actions.updateFontFamily('Asap'));
    expect(result).toEqual(updatedFontFamily);
});

const updatedColor = {
    user: {
        name: '',
        professionalTitle: '',
        pitch: ''
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
    color: '#fffff'
};

it('should update color', () => {
    let result = reducer(undefined, actions.updateColor('#fffff'));
    expect(result).toEqual(updatedColor);
});