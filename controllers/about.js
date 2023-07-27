import AboutModel from '../models/aboutModel.js';

/* ==============  POST =========== */
/* export const postAbout = async (req, res) => {
  try {
    await AboutModel.deleteMany({});

    const data = await AboutModel.create({

        header: 'About Us',
        bg: 'img link',
        section: {
          title:
            'Provide the best Constructing services for our client with their satisfaction',
          desc: 'Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. Construction of itself, because it is pain, but because proper style design occur in toil and pain pleasure Construction of itself, because it is pain, but because proper style design occur in toil and pain pleasure',
          image: 'img link',
        },
  
    });

    res.json(data);
  } catch (error) {
    console.log('About errror ', error);
  }
}; */

/* ==============  GET =========== */

export const postAbout = async (_, res) => {
  try {
    const aboutData = await AboutModel.findOne();
    if (Object.keys(aboutData).length > 0) {
      return res.status(200).json(aboutData);
    } else {
      return res.status(401).json({message: "Error data not found try again"});
    }
  } catch (error) {
    res.status(500).json({message: error})
  }
};
