import { Schema, model } from 'mongoose';

const solutionSchema = new Schema({
  header: String,
  bg: String,
  solution: {
    title: String,
    solutions: [
      {
        image: String,
        title: String,
        desc: String,
      },
    ],
  },
});

const Solution = model('Solution', solutionSchema);
export default Solution;
