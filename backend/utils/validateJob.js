function validateJobInput({ companyName, jobTitle, applicationDate, status }) {
const errors = {};
if (!companyName || companyName.trim().length < 3) {
errors.companyName = 'Company name is required and must be at least 3 characters.';
}
if (!jobTitle || jobTitle.trim().length === 0) {
errors.jobTitle = 'Job title is required.';
}
if (!applicationDate) {
errors.applicationDate = 'Application date is required.';
} else {
const applDate = new Date(applicationDate);
const today = new Date();
today.setHours(0,0,0,0);
if (isNaN(applDate.getTime())) {
errors.applicationDate = 'Invalid date.';
} else if (applDate > today) {
errors.applicationDate = 'Application date cannot be in the future.';
}
}
const allowed = ['Applied', 'Interview', 'Offer', 'Rejected'];
if (status && !allowed.includes(status)) errors.status = 'Invalid status.';


return { errors, isValid: Object.keys(errors).length === 0 };
}


module.exports = validateJobInput;