import { Schema, model } from 'mongoose';

const contentSchema = new Schema({
  header: String,
  bg: String,
  content: {
    title: String,
    contents: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
});

const Content = model('Content', contentSchema);
export default Content;
