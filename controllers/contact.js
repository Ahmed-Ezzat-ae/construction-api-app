import Contact from '../models/contactModel.js';

/* ==============  POST =========== */
// export const postContact = async (req, res) => {
//   try {
//     await Contact.deleteMany({});

//     const data = await Contact.create({
//       header: 'Get in touch',
//       bg: '/images/about/about_bg.jpg',
//       contactInfo: {
//         title: 'Contact with us',
//         desc: 'Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction.',
//         subTitle1: 'Office address',
//         desc1: 'Cairo, Giza Governorate, Al-Salam Street.',
//         subTitle2: 'Contact Info',
//         address: {
//           phone: '01121818833',
//           fax: '01090286487',
//           email: 'soliman.01150349695@gmail.com',
//           web: 'https://www.example.com',
//         },
// image: "https://civ6worldcup.com/wp-content/uploads/2021/01/CONTACT-US-banner-400x400-1.jpg",
// "contactIcons": {
//     "title": "Contact us through one of the channels",
//     "icons": [
//       {
//         "title": "Youtube",
//         "icon": "https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png",
//         "url": "https://www.youtube.com"
//       },
//       {
//         "title": "Facebook",
//         "icon": "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
//         "url": "https://www.facebook.com"
//       },
//       {
//         "title": "Twitter",
//         "icon": "https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png",
//         "url": "https://www.twitter.com"
//       },
//       {
//         "title": "Instagram",
//         "icon": "https://png.pngtree.com/png-clipart/20200226/original/pngtree-instagram-icon-collection-png-image_5320951.jpg",
//         "url": "https://www.instagram.com"
//       },
//       {
//         "title": "Tiktok",
//         "icon": "https://w7.pngwing.com/pngs/814/840/png-transparent-tiktok-tiktok-logo-tiktok-icon-thumbnail.png",
//         "url": "https://www.tiktok.com"
//       }
//     ]
//   }
//       },


//     });

//     res.json(data);
//   } catch (error) {
//     console.log('projects errror ', error);
//   }
// };

/* ==============  GET =========== */

export const postContact = async (_, res) => {
    try {
      const contactData = await Contact.findOne();
      if (Object.keys(contactData).length > 0) {
        return res.status(200).json(contactData);
      } else {
        return res.status(401).json({message: "Error data not found try again"});
      }
    } catch (error) {
      res.status(500).json({message: error})
    }
  };
