// Get form and preview elements
var form = document.getElementById('resume-form');
var preview = document.getElementById('resume-preview');
// Get input fields
var fullNameInput = document.getElementById('fullName');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
// Get preview display elements
var previewName = document.getElementById('preview-name');
var previewEmail = document.getElementById('preview-email');
var previewSkills = document.getElementById('preview-skills');
var previewExperience = document.getElementById('preview-experience');
// Function to generate the resume preview
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Set the values in the preview section
    previewName.textContent = fullNameInput.value;
    previewEmail.textContent = emailInput.value;
    previewSkills.textContent = skillsInput.value;
    previewExperience.textContent = experienceInput.value;
    // Show the preview section
    preview.classList.remove('hidden');
});
