import Services2 from '../models/servicesModel2.js';

/* ==============  POST =========== */
// export const postServices = async (req, res) => {
//   try {
//     await Services2.deleteMany({});

//     const data = await Services2.create({
//       header: 'خدمات الشركة',
//       bg: '/images/about/about_bg.jpg',
//       service: {
//         title: 'خدمات الشركة',
//         services: [
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'الغرف والقاعات',
//             desc: 'حزم البناء الأعلى تصنيفًا يسعدنا أن نواجه بعقلانية عواقب مثيرة للاهتمام من يحب أو يسعى أو يرغب في الحصول عليه',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//         ],
//       },
//     });

//     res.json(data);
//   } catch (error) {
//     console.log('services errror ', error);
//   }
// };

/* ==============  GET =========== */

export const postServices = async (_, res) => {
    try {
      const servicesData = await Services.findOne();
      if (Object.keys(servicesData).length > 0) {
        return res.status(200).json(servicesData);
      } else {
        return res.status(401).json({message: "Error data not found try again"});
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };
