const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
companyName: { type: String, required: true, minlength: 3, trim: true },
jobTitle: { type: String, required: true, trim: true },
applicationDate: { type: Date, required: true },
status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], default: 'Applied' },
}, { timestamps: true });


module.exports = mongoose.model('Job', jobSchema);