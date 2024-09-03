const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['jobseeker', 'admin', 'employer'],
        default: 'jobseeker'
    },
    resume: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    contactInfo: {
        phone: String,
        location: String,
    },
    skills: [{
        type: String,
    },],
    experience: [
        {
            company: String,
            jobTitle: String,
            startDate: Date,
            endDate: Date,
            description: String,
        },
    ],
    education: [
        {
            instution: String,
            degree: String,
            startDate: Date,
            endDate: Date,
        },
    ],
    appliedJobs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job',
    },

});

module.exports = new mongoose.model("user", userSchema);