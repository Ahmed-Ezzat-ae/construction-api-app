import HomeModel from '../models/homeModel.js';

/* ==============  POST =========== */
// export const postHome = async (req, res) => {
//   try {
//     await HomeModel.deleteMany({});

//     const data = await HomeModel.create({
//       logo: '/images/logo/logo.png',
//       slider: [
//         {
//           bg: '/images/home/bg1.jpg',
//           title: 'We build the truth',
//           desc: 'onstruction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//           btn1: 'Learn more',
//           btn2: 'Contact us',
//         },
//         {
//           bg: '/images/home/bg2.jpg',
//           title: 'We construct your dream',
//           desc: 'onstruction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//           btn1: 'Learn more',
//           btn2: 'Contact us',
//         },
//         {
//           bg: '/images/home/bg3.jpg',
//           title: 'We build great projects',
//           desc: 'onstruction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//           btn1: 'Learn more',
//           btn2: 'Contact us',
//         },
//       ],
//       about: {
//         header: 'About Us',
//         section1: {
//           title:
//             'Provide the best Constructing services for our client with their satisfaction',
//           desc: 'onstruction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//           image: '/images/about/2.jpg',
//         },
//         section2: {
//           title: 'Construction is a general term meaning the art',
//           desc: 'construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//           video: 'https://www.youtube.com/embed/AGQDK6FY1ks',
//         },
//       },

//       counterUp: {
//         bg: '/images/counter/counter.jpg',
//         counter: [
//           {
//             icon: 'https://image.similarpng.com/very-thumbnail/2021/01/Construction-logo-design-Clipart-PNG.png',
//             count: 323,
//             desc: 'our work',
//           },
//           {
//             icon: 'https://w7.pngwing.com/pngs/961/353/png-transparent-c-m-construction-logo-illustration-architectural-engineering-renovation-rae-contracting-building-house-construction-logo-kitchen-text-bathroom-thumbnail.png',
//             count: 243,
//             desc: 'our work',
//           },
//           {
//             icon: 'https://e7.pngegg.com/pngimages/307/733/png-clipart-logo-construction-organization-renovation-brand-text-logo.png',
//             count: 211,
//             desc: 'our work',
//           },
//           {
//             icon: 'https://thumbnail.imgbin.com/24/12/7/imgbin-construction-logo-graphics-product-website-under-construction-yrBtwAMHbvQVD2uDv9Q8Qj33f_t.jpg',
//             count: 231,
//             desc: 'our work',
//           },
//         ],
//       },

//       services: {
//         header: 'Our services',
//         section1: [
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//           {
//             title: 'Renovation',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//           {
//             title: 'Construction',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//         ],
//         section2: [
//           {
//             title: 'Room & Halls',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//           {
//             title: 'Renovation',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//           {
//             title: 'Construction',
//             desc: 'Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursues or desires to obtain',
//           },
//         ],

//         image: '/images/services/service.png',
//       },

//       project: {
//         header: 'Our Projects',
//         projects: [
//           {
//             image: '/images/about/1.jpg',
//             desc1: 'Construction',
//             title: 'Calton Bridge',
//             desc2: 'Duration: 24 month',
//           },
//           {
//             image: '/images/about/2.jpg',
//             desc1: 'Construction',
//             title: 'Calton Bridge',
//             desc2: 'Duration: 24 month',
//           },
//           {
//             image: '/images/about/3.jpg',
//             desc1: 'Construction',
//             title: 'Calton Bridge',
//             desc2: 'Duration: 24 month',
//           },
//           {
//             image: '/images/about/2.jpg',
//             desc1: 'Construction',
//             title: 'Calton Bridge',
//             desc2: 'Duration: 24 month',
//           },
//         ],
//       },

//       footer: {
//         footerLinks: [
//           {
//             header: 'Company',
//             links: [
//               'Usage Agreement',
//               'Common questions',
//               'payment methods',
//               'Articles',
//             ],
//           },

//           {
//             header: 'Information',
//             links: [
//               'About us',
//               'Our Services',
//               'Recent Projects',
//               'Contact us',
//             ],
//           },

//           {
//             header: 'Our Explore',
//             links: [
//               'Project Planing',
//               'Cost Calculator',
//               'Our Testinonials',
//               'Mining Sector',
//             ],
//           },
//           {
//             header: 'Contact Info',
//             links: [
//               'Cairo, Ain Shams',
//               'soliman.01150349695@gmail.com',
//               '01121818833',
//               '01090286487',
//             ],
//           },
//         ],
//         marquee:
//           'Al-Manar Company for software and web development 01121818833',
//       },
//     });

//     res.json(data);
//   } catch (error) {
//     console.log('Home errror ', error);
//   }
// };

/* ==============  GET =========== */

export const postHome = async (_, res) => {
  try {
    const homeData = await HomeModel.findOne();
    if (Object.keys(homeData).length > 0) {
      return res.status(200).json(homeData);
    } else {
      return res
        .status(401)
        .json({ message: 'Error data not found try again' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
