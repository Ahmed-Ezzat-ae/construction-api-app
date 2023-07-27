import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  header: String,
  bg: String,
  service: {
    title: String,
    services: [
      {
        title: String,
        desc: String,
        icon: String,
      },
    ],
  },
});

const Service = model('Service', serviceSchema);
export default Service;
