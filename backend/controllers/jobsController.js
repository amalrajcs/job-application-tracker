const Job = require('../models/Job');
const validateJobInput = require('../utils/validateJob');


exports.getAll = async (req, res) => {
try {
const jobs = await Job.find().sort({ createdAt: -1 });
res.json(jobs);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


exports.getOne = async (req, res) => {
try {
const job = await Job.findById(req.params.id);
if (!job) return res.status(404).json({ message: 'Job not found' });
res.json(job);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


exports.create = async (req, res) => {
const { errors, isValid } = validateJobInput(req.body);
if (!isValid) return res.status(400).json({ errors });


try {
const newJob = new Job(req.body);
await newJob.save();
res.status(201).json(newJob);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


exports.update = async (req, res) => {
const { errors, isValid } = validateJobInput(req.body);
if (!isValid) return res.status(400).json({ errors });


try {
const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
if (!updated) return res.status(404).json({ message: 'Job not found' });
res.json(updated);
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};


exports.remove = async (req, res) => {
try {
const deleted = await Job.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ message: 'Job not found' });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ message: 'Server error' });
}
};