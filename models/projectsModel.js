import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  header: String,
  bg: String,
  project: {
    title: String,
    projects: [
      {
        image: String,
        desc1: String,
        title: String,
        desc2: String,
      },
    ],
  },
});

const Project = model('Project', projectSchema);
export default Project;
