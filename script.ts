// TypeScript code for resume builder

// Get form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const preview = document.getElementById('resume-preview') as HTMLElement;

// Get input elements
const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

// Get preview elements
const previewName = document.getElementById('preview-name') as HTMLElement;
const previewEmail = document.getElementById('preview-email') as HTMLElement;
const previewSkills = document.getElementById('preview-skills') as HTMLElement;
const previewExperience = document.getElementById('preview-experience') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // Populate the preview section
  previewName.textContent = fullNameInput.value;
  previewEmail.textContent = emailInput.value;
  previewSkills.textContent = `Skills: ${skillsInput.value}`;
  previewExperience.textContent = `Experience: ${experienceInput.value}`;

  // Show the preview
  preview.classList.remove('hidden');
});


