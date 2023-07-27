import Solution from '../models/solutionModel.js';

/* ==============  POST =========== */
/* export const postSolution = async (req, res) => {
  try {
    await Solution.deleteMany({});

    const data = await Solution.create({
      header: 'Our solutions',
      bg: '/images/about/about_bg.jpg',
      solution: {
        title: 'Our solutions',
        solutions: [
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Virtual Construction',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/355_Knox%20Village%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Zero Harm Everyday',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
          {
            image: 'https://centurion.ca/img/posts/news/343_evolution%20(400%20x%20400%20px).png',
            title: 'Build To Last',
            desc: 'You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor sit amet integer suscipit.',
          },
        ],
      },
    });

    res.json(data);
  } catch (error) {
    console.log('Solution errror ', error);
  }
}; */

/* ==============  GET =========== */

export const postSolution = async (_, res) => {
    try {
      const solutionData = await Solution.findOne();
      if (Object.keys(solutionData).length > 0) {
        return res.status(200).json(solutionData);
      } else {
        return res.status(401).json({message: "Error data not found try again"});
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };
