
const form = document.getElementById('resume-form') as HTMLFormElement;
const preview = document.getElementById('resume-preview') as HTMLElement;


const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;


const previewName = document.getElementById('preview-name') as HTMLElement;
const previewEmail = document.getElementById('preview-email') as HTMLElement;
const previewSkills = document.getElementById('preview-skills') as HTMLElement;
const previewExperience = document.getElementById('preview-experience') as HTMLElement;


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();


  previewName.textContent = fullNameInput.value;
  previewEmail.textContent = emailInput.value;

  const skills = skillsInput.value.split(',').map(skill => skill.trim());
  previewSkills.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    previewSkills.appendChild(li);
  });

  previewExperience.textContent = experienceInput.value;


  preview.classList.remove('hidden');
});

const updateFormFromPreview = () => {
  fullNameInput.value = previewName.textContent || '';
  emailInput.value = previewEmail.textContent || '';


  const skillsArray = Array.from(previewSkills.querySelectorAll('li')).map(li => li.textContent?.trim()).filter(Boolean) as string[];
  skillsInput.value = skillsArray.join(', ');

  experienceInput.value = previewExperience.textContent || '';
};


[previewName, previewEmail, previewSkills, previewExperience].forEach(el => {
  el.addEventListener('input', updateFormFromPreview);
});
