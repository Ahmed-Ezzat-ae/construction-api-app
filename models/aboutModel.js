import { Schema, model } from 'mongoose';

const aboutSchema = new Schema({
  header: String,
  bg: String,
  section: {
    title: String,
    desc: String,
    image: String,
  },
});

const About = model('About', aboutSchema);
export default About;
