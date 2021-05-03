import * as ACTIONS from './actionType'

export const update = (actionId, data) => ({ type: actionId, payload: data })

export const updateUserData = (data) => update(ACTIONS.UPDATE_USER_DATA, data);
export const updateName = (name) => updateUserData({ name });
export const updateProfessionalTitle = (professionalTitle) => updateUserData({ professionalTitle });
export const updatePitch = (pitch) => updateUserData({ pitch });

export const updateContactData = (data) => update(ACTIONS.UPDATE_CONTACT_DATA, data);
export const updateEmail = (email) => updateContactData({ email });
export const updatePhoneNumber = (phoneNumber) => updateContactData({ phoneNumber });
export const updateAddress = (address) => updateContactData({ address });

export const updateTitles = (data) => update(ACTIONS.UPDATE_TITLES, data);
export const updateWorkExperienceTitle = (workExperienceTitle) => updateTitles({ workExperienceTitle });
export const updateEducationTitle = (educationTitle) => updateTitles({ educationTitle });
export const updateSkillsTitle = (skillsTitle) => updateTitles({ skillsTitle });

export const updateSectionStatus = (data) => update(ACTIONS.UPDATE_SECTION_STATUS, data);
export const updatePictureSectionStatus = (picture) => updateSectionStatus({ picture });
export const updatePitchSectionStatus = (pitch) => updateSectionStatus({ pitch });
export const updateWorkExperienceSectionStatus = (workExperience) => updateSectionStatus({ workExperience });
export const updateEducationSectionStatus = (education) => updateSectionStatus({ education });
export const updateSkillsSectionStatus = (skills) => updateSectionStatus({ skills });

export const updateFontFamily = (fontFamily) => update(ACTIONS.UPDATE_FONT_FAMILY, fontFamily);

const socialAcount = {
    id: 0,
    name: '',
    url: ''
}

export const addSocialAccount = () => update(ACTIONS.ADD_SOCIAL_ACCOUNT_DATA, socialAcount);
export const updateSocialAccount = (id, data) => {
    const payout = {
        ...data,
        id: id
    }
    return update(ACTIONS.UPDATE_SOCIAL_ACCOUNT_DATA, payout)
};
export const deleteSocialAccount = (id) => update(ACTIONS.DELETE_SOCIAL_ACCOUNT_DATA, { id });

const workExperience = {
    id: 0,
    position: '',
    workplace: '',
    startDate: '',
    endDate: '',
    location: '',
    companyDescription: '',
    accomplishment: ''
}
export const addWorkExperience = () => update(ACTIONS.ADD_WORK_EXPERIENCE_DATA, workExperience);

export const updateWorkExperience = (id, data) => {
    const payload = {
        ...data,
        id: id
    };
    return update(ACTIONS.UPDATE_WORK_EXPERIENCE_DATA, payload)
};
export const deleteWorkExperience = (id) => update(ACTIONS.DELETE_WORK_EXPERIENCE_DATA, { id });

const education = {
    id: 0,
    studyProgram: '',
    institution: '',
    startDate: '',
    endDate: '',
    description: '',
    additionalData: ''
}

export const addEducation = () => update(ACTIONS.ADD_EDUCATION_DATA, education);

export const updateEducation = (id, data) => {
    const payload = {
        ...data,
        id: id
    };
    return update(ACTIONS.UPDATE_EDUCATION_DATA, payload)
};
export const deleteEducation = (id) => update(ACTIONS.DELETE_EDUCATION_DATA, { id });