import Content from '../models/contentModel.js';

/* ==============  POST =========== */
/* export const postContent = async (req, res) => {
  try {
    await Content.deleteMany({});

    const data = await Content.create({
      header: 'Content',
      bg: '/images/about/about_bg.jpg',
      content: {
        title: 'Content',
        contents: [
          {
            image: '/images/content/content1.jpg',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: '/images/content/content2.jpg',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: '/images/content/content3.jpg',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
        ],
      },
    });

    res.json(data);
  } catch (error) {
    console.log('projects errror ', error);
  }
}; */

/* ==============  GET =========== */

export const postContent = async (_, res) => {
    try {
      const contentData = await Content.findOne();
      if (Object.keys(contentData).length > 0) {
        return res.status(200).json(contentData);
      } else {
        return res.status(401).json({message: "Error data not found try again"});
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };
  
