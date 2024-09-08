// Get form and preview elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const preview = document.getElementById('resume-preview') as HTMLElement;

// Get input fields
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

// Get preview display elements
const previewName = document.getElementById('preview-name') as HTMLElement;
const previewEmail = document.getElementById('preview-email') as HTMLElement;
const previewSkills = document.getElementById('preview-skills') as HTMLElement;
const previewExperience = document.getElementById('preview-experience') as HTMLElement;

// Function to generate the resume preview
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // Set the values in the preview section
  previewName.textContent = fullNameInput.value;
  previewEmail.textContent = emailInput.value;
  previewSkills.textContent = skillsInput.value;
  previewExperience.textContent = experienceInput.value;

  // Show the preview section
  preview.classList.remove('hidden');
});


