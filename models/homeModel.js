import { Schema, model } from 'mongoose';

const homeSchema = new Schema({
  logo: String,
  slider: [
    {
      bg: String,
      title: String,
      desc: String,
      btn1: String,
      btn2: String,
    },
  ],
  about: {
    header: String,
    section1: {
      title: String,
      desc: String,
      image: String,
    },
    section2: {
      title: String,
      desc: String,
      video: String,
    },
  },

  counterUp: {
    bg: String,
    counter: [
      {
        icon: String,
        count: Number,
        desc: String,
      },
    ],
  },

  services: {
    header: String,
    section1: [
      {
        title: String,
        desc: String,
      },
    ],
    section2: [
      {
        title: String,
        desc: String,
      },
    ],

    image: String,
  },

  project: {
    header: String,
    projects: [
      {
        image: String,
        desc1: String,
        title: String,
        desc2: String,
      },
    ],
  },

  footer: {
    footerLinks: [
      {
        header: String,
        links: [String],
      },
    ],
    marquee: String,
  },
});

const Home = model('Home', homeSchema);
export default Home;
