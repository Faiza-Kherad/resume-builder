// Regular expressions for validation
const strRegex: RegExp = /^[a-zA-Z\s]*$/; // Only letters and spaces
const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex: RegExp = /^\d+$/;

const mainForm = document.getElementById('cv-form') as HTMLFormElement;

const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
} as const;

type ValidType = keyof typeof validType;

// User input elements
const firstnameElem = mainForm.firstname as HTMLInputElement;
const middlenameElem = mainForm.middlename as HTMLInputElement;
const lastnameElem = mainForm.lastname as HTMLInputElement;
const imageElem = mainForm.image as HTMLInputElement;
const designationElem = mainForm.designation as HTMLInputElement;
const addressElem = mainForm.address as HTMLInputElement;
const emailElem = mainForm.email as HTMLInputElement;
const phonenoElem = mainForm.phoneno as HTMLInputElement;
const summaryElem = mainForm.summary as HTMLInputElement;

// Display elements
const nameDsp = document.getElementById('fullname_dsp') as HTMLDivElement;
const imageDsp = document.getElementById('image_dsp') as HTMLImageElement;
const phonenoDsp = document.getElementById('phoneno_dsp') as HTMLDivElement;
const emailDsp = document.getElementById('email_dsp') as HTMLDivElement;
const addressDsp = document.getElementById('address_dsp') as HTMLDivElement;
const designationDsp = document.getElementById('designation_dsp') as HTMLDivElement;
const summaryDsp = document.getElementById('summary_dsp') as HTMLDivElement;
const projectsDsp = document.getElementById('projects_dsp') as HTMLDivElement;
const achievementsDsp = document.getElementById('achievements_dsp') as HTMLDivElement;
const skillsDsp = document.getElementById('skills_dsp') as HTMLDivElement;
const educationsDsp = document.getElementById('educations_dsp') as HTMLDivElement;
const experiencesDsp = document.getElementById('experiences_dsp') as HTMLDivElement;

interface UserData {
    firstname: string;
    middlename: string;
    lastname: string;
    designation: string;
    address: string;
    email: string;
    phoneno: string;
    summary: string;
    achievements: Array<{ achieve_title: string; achieve_description: string }>;
    experiences: Array<{
        exp_title: string;
        exp_organization: string;
        exp_location: string;
        exp_start_date: string;
        exp_end_date: string;
        exp_description: string;
    }>;
    educations: Array<{
        edu_school: string;
        edu_degree: string;
        edu_city: string;
        edu_start_date: string;
        edu_graduation_date: string;
        edu_description: string;
    }>;
    projects: Array<{ proj_title: string; proj_link: string; proj_description: string }>;
    skills: Array<{ skill: string }>;
}

const fetchValues = (attrs: string[], ...nodeLists: NodeListOf<HTMLInputElement>[]): any[] => {
    const elemsAttrsCount = nodeLists.length;
    const elemsDataCount = nodeLists[0].length;
    const tempDataArr: any[] = [];

    for (let i = 0; i < elemsDataCount; i++) {
        const dataObj: any = {};
        for (let j = 0; j < elemsAttrsCount; j++) {
            dataObj[attrs[j]] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
};

const getUserInputs = (): UserData => {
    // Achievements
    const achievementsTitleElem = document.querySelectorAll('.achieve_title') as NodeListOf<HTMLInputElement>;
    const achievementsDescriptionElem = document.querySelectorAll('.achieve_description') as NodeListOf<HTMLInputElement>;

    // Experiences
    const expTitleElem = document.querySelectorAll('.exp_title') as NodeListOf<HTMLInputElement>;
    const expOrganizationElem = document.querySelectorAll('.exp_organization') as NodeListOf<HTMLInputElement>;
    const expLocationElem = document.querySelectorAll('.exp_location') as NodeListOf<HTMLInputElement>;
    const expStartDateElem = document.querySelectorAll('.exp_start_date') as NodeListOf<HTMLInputElement>;
    const expEndDateElem = document.querySelectorAll('.exp_end_date') as NodeListOf<HTMLInputElement>;
    const expDescriptionElem = document.querySelectorAll('.exp_description') as NodeListOf<HTMLInputElement>;

    // Education
    const eduSchoolElem = document.querySelectorAll('.edu_school') as NodeListOf<HTMLInputElement>;
    const eduDegreeElem = document.querySelectorAll('.edu_degree') as NodeListOf<HTMLInputElement>;
    const eduCityElem = document.querySelectorAll('.edu_city') as NodeListOf<HTMLInputElement>;
    const eduStartDateElem = document.querySelectorAll('.edu_start_date') as NodeListOf<HTMLInputElement>;
    const eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date') as NodeListOf<HTMLInputElement>;
    const eduDescriptionElem = document.querySelectorAll('.edu_description') as NodeListOf<HTMLInputElement>;

    const projTitleElem = document.querySelectorAll('.proj_title') as NodeListOf<HTMLInputElement>;
    const projLinkElem = document.querySelectorAll('.proj_link') as NodeListOf<HTMLInputElement>;
    const projDescriptionElem = document.querySelectorAll('.proj_description') as NodeListOf<HTMLInputElement>;

    const skillElem = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;

    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem),
    };
};

function validateFormData(elem: HTMLInputElement, elemType: ValidType, elemName: string) {
    if (elemType === validType.TEXT) {
        if (!strRegex.test(elem.value) || elem.value.trim().length === 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    } else if (elemType === validType.TEXT_EMP) {
        if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    } else if (elemType === validType.EMAIL) {
        if (!emailRegex.test(elem.value) || elem.value.trim().length === 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    } else if (elemType === validType.PHONENO) {
        if (!phoneRegex.test(elem.value) || elem.value.trim().length === 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    } else if (elemType === validType.ANY) {
        if (elem.value.trim().length === 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

function addErrMsg(formElem: HTMLInputElement, formElemName: string) {
    formElem.nextElementSibling!.innerHTML = `${formElemName} is invalid`;
}

function removeErrMsg(formElem: HTMLInputElement) {
    formElem.nextElementSibling!.innerHTML = "";
}

const showListData = (listData: any[], listContainer: HTMLDivElement) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        const itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for (const key in listItem) {
            const subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-span');
            subItemElem.innerHTML = `<strong>${key}</strong>: ${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }
        
        listContainer.appendChild(itemElem);
    });
};

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = getUserInputs();

    nameDsp.innerHTML = `${formData.firstname} ${formData.middlename} ${formData.lastname}`;
    phonenoDsp.innerHTML = formData.phoneno;
    emailDsp.innerHTML = formData.email;
    addressDsp.innerHTML = formData.address;
    designationDsp.innerHTML = formData.designation;
    summaryDsp.innerHTML = formData.summary;

    showListData(formData.projects, projectsDsp);
    showListData(formData.achievements, achievementsDsp);
    showListData(formData.skills, skillsDsp);
    showListData(formData.educations, educationsDsp);
    showListData(formData.experiences, experiencesDsp);
});
