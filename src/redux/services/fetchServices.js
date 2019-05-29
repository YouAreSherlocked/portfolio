export const sections = [
   'Graphic Design', 
   'Illustrations', 
   'Photography', 
   'Programming'
];

export const technologies = [
  'Adobe Illustrator', 
  'Adobe InDesign', 
  'Adobe Photoshop', 
  'Adobe After Effects',
  'After Premiere Pro',
  'Adobe Lightroom',
  'Adobe XD',
  'React Js',
  'Vue Js',
  'Plain Java Script',
  'Asp.Net',
  'Laravel',
  'PHP',
  'Redux'
];


export const projects = [
  {
    category: sections[0],
    title: "Mirayon",
    description: "Description of test1",
    technologies: [
      technologies[0]
    ],
    image: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_4ways.jpg"),
    thumbnail: require("../../assets/img/Graphic Design/mirayon/thumbnail.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }  
    ]
  },
  {
    category: sections[0],
    title: "JG Genesis",
    description: "Description of test1",
    technologies: [
      technologies[1],
      technologies[2]
    ],
    image: require("../../assets/img/Graphic Design/genesis/sledgecamp_flyer_19.jpg"),
    thumbnail: require("../../assets/img/Graphic Design/genesis/sledgecamp_flyer_19_illu.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[0],
    title: "Custodigit",
    description: "Description of test1",
    technologies: [
      technologies[0],
      technologies[1],
      technologies[6]
    ],
    image: require("../../assets/img/Graphic Design/genesis/sledgecamp_flyer_19.jpg"),
    thumbnail: require("../../assets/img/Graphic Design/custodigit/thumbnail.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[1],
    title: "1 Day Designer Challenge",
    description: "Description of test1",
    technologies: [
      technologies[2]
    ],
    image: require("../../assets/img/Illustrations/designerchallenge/illustration_small.jpg"),
    thumbnail: require("../../assets/img/Illustrations/designerchallenge/illustration_small.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[1],
    title: "JG Genesis",
    description: "Description of test1",
    technologies: [
      technologies[0],
      technologies[2]
    ],
    image: require("../../assets/img/Illustrations/genesis/thumbnail.jpg"),
    thumbnail: require("../../assets/img/Illustrations/genesis/thumbnail.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[1],
    title: "Apps Team",
    description: "Description of test1",
    technologies: [
      technologies[1],
      technologies[2]
    ],
    image: require("../../assets/img/Illustrations/appsteam/apps_team_comic1_1.jpg"),
    thumbnail: require("../../assets/img/Illustrations/appsteam/thumbnail.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[3],
    title: "Zoom",
    description: "Description of test1",
    technologies: [
      technologies[9]
    ],
    image: require("../../assets/img/programming/zoom.jpg"),
    thumbnail: require("../../assets/img/programming/zoom.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[3],
    title: "Digital Business Carreer",
    description: "Description of test1",
    technologies: [
      technologies[8],
      technologies[14]
    ],
    image: require("../../assets/img/programming/dbc.jpg"),
    thumbnail: require("../../assets/img/programming/dbc.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  },
  {
    category: sections[3],
    title: "Fit Adviser",
    inProgress: true,
    description: "Description of test1",
    technologies: [
      technologies[10],
      technologies[12],
      technologies[13]
    ],
    image: require("../../assets/img/programming/fitadviser.jpg"),
    thumbnail: require("../../assets/img/programming/fitadviser.jpg"),
    imgs: [
      
    ]
  },
  {
    category: sections[3],
    title: "Portfolio",
    description: "Description of test1",
    technologies: [
      technologies[8],
      technologies[14]
    ],
    image: require("../../assets/img/programming/portfolio.jpg"),
    thumbnail: require("../../assets/img/programming/portfolio.jpg"),
    imgs: [
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
      },
      {
        text: "img description",
        img: require("../../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
      }
    ]
  }
];

export const skills = [
  {
    id: 0,
    title: "HTML/CSS",
    score: 9
  },
  {
    id: 1,
    title: "Vanilla JS",
    score: 8
  },
  {
    id: 2,
    title: "React/Redux",
    score: 7
  },
  {
    id: 3,
    title: "Vue",
    score: 5
  },
  {
    id: 4,
    title: "C#",
    score: 7
  },
  {
    id: 5,
    title: "Java",
    score: 5,
    center: true
  },
  {
    id: 6,
    title: "PHP",
    score: 5,
    center: true
  },
  {
    id: 7,
    title: "Laravel",
    score: 5
  },
  {
    id: 8,
    title: "SQL",
    score: 9
  },
  {
    id: 9,
    title: "Ruby on Rails",
    score: 6
  },
];
