import Services from '../models/servicesModel.js';

/* ==============  POST =========== */
// export const postServices = async (req, res) => {
//   try {
//     await Services.deleteMany({});

//     const data = await Services.create({
//       header: 'Our services',
//       bg: '/images/about/about_bg.jpg',
//       service: {
//         title: 'Our services',
//         services: [
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//             icon: 'https://cdn-icons-png.flaticon.com/512/4756/4756242.png',
//           },
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
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
