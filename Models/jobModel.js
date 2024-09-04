const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  openings: {
    type: Number,
    required: true,
  },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  }
});

module.exports = new mongoose.model("job", jobSchema);
