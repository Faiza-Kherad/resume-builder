// TypeScript code for resume builder
// Get form elements
var form = document.getElementById('resume-form');
var preview = document.getElementById('resume-preview');
// Get input elements
var fullNameInput = document.getElementById('fullName');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
// Get preview elements
var previewName = document.getElementById('preview-name');
var previewEmail = document.getElementById('preview-email');
var previewSkills = document.getElementById('preview-skills');
var previewExperience = document.getElementById('preview-experience');
// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Populate the preview section
    previewName.textContent = fullNameInput.value;
    previewEmail.textContent = emailInput.value;
    previewSkills.textContent = "Skills: ".concat(skillsInput.value);
    previewExperience.textContent = "Experience: ".concat(experienceInput.value);
    // Show the preview
    preview.classList.remove('hidden');
});
