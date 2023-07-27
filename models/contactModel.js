import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  header: String,
  bg: String,
  contactInfo: {
    title: String,
    desc: String,
    subTitle1: String,
    desc1: String,
    subTitle2: String,
    address: {
      phone: String,
      fax: String,
      email: String,
      web: String,
    },
    image: String,
    contactIcons: {
      title: String,
      icons: [
        {
          title: String,
          icon: String,
          url: String,
        },
      ],
    },
  },
});

const Contact = model('Contact', contactSchema);
export default Contact;
