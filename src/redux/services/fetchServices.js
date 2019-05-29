export const sections = [
   'Programming',
   'Graphic Design', 
   'Illustrations', 
   'Photography'
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
    category: sections[1],
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
    category: sections[1],
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
    category: sections[1],
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
    category: sections[2],
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
    category: sections[2],
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
    category: sections[2],
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
    category: sections[0],
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
    category: sections[0],
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
    category: sections[0],
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
    category: sections[0],
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

export const qualiprojects = [
  {
    title: "First Steps",
    start: new Date(2017, 8),
    end: new Date(2017, 8),
    description: [
      "Einführung der Abläufe in der Swisscom",
      "Basis Software",
      "Einrichtung der Geräte",
      "Kennenlernen LB"
    ],
    qpa: {
      name: "Andreas Mast",
      link: "https://collaboration.swisscom.com/Person.aspx?accountname=CORPROOT%5CTBIMAA00"
    }
  },
  {
    title: "CRM Monitor",
    start: new Date(2017, 8),
    end: new Date(2018, 2),
    description: [
      "Unterhalt & Weiterentwicklung Webapplikation",
      "C#, Asp.Net, MySQL, Javascript",
      "Bereitstellung von Daten",
      "Datenbank Pflegung"
    ],
    qpa: {
      name: "Alexander Papst",
      link: "https://collaboration.swisscom.com/Person.aspx?accountname=CORPROOT%5CTGDPAAL4"
    }
  },
  {
    title: "Medienkurse",
    start: new Date(2018, 2),
    end: new Date(2018, 8),
    description: [
      "Entwicklung & Projektleitung Webapplikation",
      "C#, Asp.Net, MySQL, Javascript",
      "Produktivsetzung der Applikation",
      "Unterstützung und Übernahme Projektleitung"
    ],
    qpa: {
      name: "Jürg Müller",
      link: "https://collaboration.swisscom.com/Person.aspx?accountname=CORPROOT%5CTAAMUJU1"
    }
  },
  {
    title: "Designer Apps Team",
    start: new Date(2018, 8),
    end: new Date(2019, 1),
    description: [
      "Webdesign",
      "Gesamtauftritt des Start Ups Custodigit",
      "Digital- und Printdesigns",
      "2/2 Gewinner interner Design Challenge"
    ],
    qpa: {
      name: "John Riordan",
      link: "https://collaboration.swisscom.com/Person.aspx?accountname=CORPROOT%5CTAARIJO1"
    }
  },
  {
    title: "Frontend Apps Team",
    start: new Date(2019, 2),
    end: new Date(2019, 7),
    description: [
      "Umsetzung Frontend diverser Webapplikationen",
      "React Js & Redux",
      "Vue Js"
    ],
    qpa: {
      name: "John Riordan",
      link: "https://collaboration.swisscom.com/Person.aspx?accountname=CORPROOT%5CTAARIJO1"
    }
  },
  {
    title: "...new Project",
    start: new Date(2019, 8),
    end: new Date(2020, 2),
    description: [
      "Einführung der Abläufe in der Swisscom",
      "Basis Software",
      "Einrichtung der Geräte",
      "Kennenlernen LB"
    ],
    qpa: {
      name: "...",
      link: "..."
    }
  },
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
