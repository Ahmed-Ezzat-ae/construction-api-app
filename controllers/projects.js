import Project from "../models/projectsModel.js";

/* ==============  POST =========== */
// export const postProjects = async (req, res) => {
//   try {
//     await Project.deleteMany({});

//     const data = await Project.create({
//       header: 'مشاريع الشركة',
//       bg: '/images/about/about_bg.jpg',
//       project: {
//         title: 'مشاريع الشركة',
//         projects: [
//           {
//             image: '/images/about/1.jpg',
//             desc1: 'بناء',
//             title: 'جسر كالتون',
//             desc2: 'المدة: 24 شهر',
//           },
//           {
//             image: '/images/about/2.jpg',
//             desc1: 'بناء',
//             title: 'جسر كالتون',
//             desc2: 'المدة: 24 شهر',
//           },
//           {
//             image: '/images/about/3.jpg',
//             desc1: 'بناء',
//             title: 'جسر كالتون',
//             desc2: 'المدة: 24 شهر',
//           },
//           {
//             image: '/images/about/2.jpg',
//             desc1: 'بناء',
//             title: 'جسر كالتون',
//             desc2: 'المدة: 24 شهر',
//           },
//         ],
//       },
//     });

//     res.json(data);
//   } catch (error) {
//     console.log('projects errror ', error);
//   }
// };

/* ==============  GET =========== */

export const postProjects = async (_, res) => {
    try {
      const projectData = await Project.findOne();
      if (Object.keys(projectData).length > 0) {
        return res.status(200).json(projectData);
      } else {
        return res.status(401).json({message: "Error data not found try again"});
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };
  
