module.exports = {
  app_title: "ENEI 2018",
  description: "Página do Encontro Nacional de Estudantes de Informática 2018, a realizar na Faculdade de Engenharia da Universidade do Porto de 23 a 26 de Março. O ENEI é um evento que pretende oferecer aos estudantes de todo o país um evento que promove a aprendizagem, a troca de ideias e o convívio, enquanto tenta criar fortes ligações com o mundo empresarial.",
  author: "NIAEFEUP+IEEE FEUP",
  update_script: "/www/website-enei/hooks/hook.sh",
  signup_spreadsheet: "1XQvB1H0EBVpU2_gvbJCl3RWGp1DkpE_Z1AzYiDFcpL8",
  sponsors: {
    main: [{
      name: "Sonae IM",
      image: "sonaeim.png",
      href: "http://www.sonaeim.com",
      show: true
    }],
    gold: [{
        name: "Deloitte",
        image: "deloitte.png",
        href: "https://www.deloitte.com",
        show: true
      },
      {
        name: "Efacec",
        image: "efacec.jpg",
        href: "http://www.efacec.com",
        show: true
      },
      {
        name: "Natixis",
        image: "natixis.png",
        href: "https://www.natixis.com",
        show: true
      },
      {
        name: "Wipro",
        image: "wipro.jpg",
        href: "https://www.wipro.com",
        show: true
      }
    ],
    silver: [{
        name: "Aptiv",
        image: "aptiv.jpg",
        href: "https://www.aptiv.com",
        show: true
      },
      {
        name: "Blip",
        image: "blip.png",
        href: "https://www.blip.pt",
        show: true
      },
      {
        name: "Novabase",
        image: "novabase.png",
        href: "http://www.novabase.pt",
        show: true
      },
      {
        name: "Sonae Bit",
        image: "sonaebit.jpg",
        href: "https://www.sonae.pt",
        show: true
      },
      {
        name: "Vodafone",
        image: "vodafone.jpg",
        href: "https://www.vodafone.pt",
        show: true
      },
      {
        name: "Critical Software",
        image: "criticalsoftware.png",
        href: "https://www.criticalsoftware.com",
        show: true
      },
      {
        name: "Euronext",
        image: "euronext.jpg",
        href: "https://www.euronext.com/",
        show: true
      }
    ],
    bronze: [{
        name: "Critical Manufacturing",
        image: "criticalmanufacturing.png",
        href: "http://www.criticalmanufacturing.com",
        show: true
      },
      {
        name: "Smart Consulting",
        image: "smartconsulting.jpg",
        href: "http://www.smartconsulting.pt",
        show: true
      },
      {
        name: "Fabamaq",
        image: "fabamaq.jpg",
        href: "https://www.fabamaq.com",
        show: true
      },
      {
        name: "Fraunhofer",
        image: "fraunhofer.jpg",
        href: "https://www.fraunhofer.pt",
        show: true
      },
      {
        name: "Life on Mars",
        image: "lifeonmars.png",
        href: "https://www.lifeonmars.pt",
        show: true
      },
      {
        name: "Whitesmith",
        image: "whitesmith.png",
        href: "https://www.whitesmith.co",
        show: true
      },
      {
        name: "Bitmaker",
        image: "bitmaker.png",
        href: "https://www.wearebitmaker.com",
        show: true
      },
      {
        name: "Pixelmatters",
        image: "pixelmatters.png",
        href: "http://www.pixelmatters.com",
        show: true
      },
      {
        name: "Farfetch",
        image: "farfetch.png",
        href: "https://www.farfetch.com/pt/",
        show: true
      },
      {
        name: "Shiftforward",
        image: "shiftforward.png",
        href: "https://www.shiftforward.eu/",
        show: true
      },
      {
        name: "ITSector",
        image: "itsector.png",
        href: "http://www.itsector.pt/pt/",
        show: true
      }
    ],
  },
  partners: [{
      name: "Faculdade de Engenharia da Universidade do Porto",
      image: "feup.jpg",
      href: "https://www.fe.up.pt",
      show: true
    },
    {
      name: "Associação de Estudantes da FEUP",
      image: "aefeup.jpg",
      href: "https://www.aefeup.pt",
      show: true
    },
    {
      name: "Departamento de Engenharia Informática da FEUP",
      image: "dei.jpg",
      href: "https://www.dei.fe.up.pt",
      show: true
    },
    {
      name: "FBAUP Design Inc.",
      image: "fbaup-design-inc.png",
      href: "https://www.behance.net/fbaupdesigninc",
      show: true
    },
  ],
  speakers: [{
      id: 0,
      name: "André Silva",
      shortBio: "Parity Technologies",
      company: "Parity Technologies",
      role: "Core Developer",
      fullBio: "Engenheiro de Software formado em 2011 pela Faculdade de Engenharia da Universidade do Porto. Nos últimos anos trabalhou na <a href='https://shiftforward.eu'>ShiftForward</a> onde desenvolveu tecnologia para online marketing. Atualmente é colaborador do projecto <a href= 'https://github.com/paritytech/parity'>parity</a>, uma das implementações do Ethereum.",
      image: "andre_silva.jpg",
      linkedin: "https://www.linkedin.com/in/andrerfosilva/",
      github: "https://github.com/andresilva",
      faqs: [],
      /*faqs: [{
          question: "Onde trabalha atualmente?",
          answer: "Em minha casa."
        },
        {
          question: "O que gosta de fazer?",
          answer: "Trabalhar para o site do ENEI! xD"
        }
      ],*/
      //talkDate: "A definir.",
      talkTitle: "",
      talkSummary: "A palestra será uma introdução a tecnologia blockchain, onde se irá descrever como funciona um sistema como Bitcoin e o que assegura a segurança do mesmo. Durante a palestra iremos começar por descrever o problema que estamos a tentar resolver (distributed ledger) e iterativamente construir uma solução que no final deverá ser semelhante a Bitcoin (não irá ser 100% semelhante para evitar descrever detalhes de implementação). Por fim irei também fazer uma pequena menção a outros sistema como o Ethereum.",
      show: true
    },
    {
      id: 1,
      name: "João Leal",
      shortBio: "Google",
      company: "Google",
      role: "Software Engineer",
      fullBio: "João é um antigo aluno da Faculdade de Engenharia da Universidade do Porto e desde que se formou é Engenheiro de Software na Google de Munique. É um Engenheiro de Software generalista, na medida em que não se foca numa só área, e no seu percurso na Google tem trabalhado com projetos de grande importância no cumprimento de normais europeias ligadas à área da privacidade dos utilizadores. Atualmente está a liderar um projeto de bastante importância para a Google.",
      image: "joao_leal.jpg",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-leal-42946475/",
      facebook: "https://www.facebook.com/lealjoaoo",
      instagram: "https://www.instagram.com/joaoo_leal/",
      faqs: [],
      /*faqs: [{
          question: "Onde trabalha atualmente?",
          answer: "Em minha casa."
        },
        {
          question: "O que gosta de fazer?",
          answer: "Trabalhar para o site do ENEI! xD"
        }
      ],*/
      //talkDate: "Sexta-feira, 11:42",
      talkTitle: "Como podes chegar à Google? Dicas para conseguires o teu emprego de sonho.",
      talkSummary: "",
      show: true
    },
    {
      id: 2,
      name: "Nelson Pinho",
      shortBio: "Microsoft Portugal",
      role: "Public Safety and National Security Industry Lead",
      company: "Microsoft Portugal",
      fullBio: "I'm the Public Safety and National Security Industry Lead at Microsoft Portugal. I have the responsibility of supporting Microsoft's client's strategy on their digital transformation and help them to achieve more. I also establish straight collaborations with some of the main Portuguese and International Universities and Research Centers. I hold a PhD in Industrial Engineering and Management from the University of Porto and teach at Porto Polytechnic Institute in the areas of Software Engineering and Management. My current research focuses on new multidisciplinary methods for designing services for complex value networks such as national electronic health records or wildfire fighting. Since 2001, I have been working in the Information Technology Sector. I was member of the Executive Committee of one of the first IT integrators in Portugal, and in 2012 founded Kentra Technologies, a software vendor in the Healthcare sector. My experience working at the public sector started in 2008 helping the Portuguese Ministry of Health to design the National Electronic Health Record.",
      image: "nelson_pinho.png",
      linkedin: "//nelson_pinho.com",
      facebook: "//facebook.com",
      instagram: "//instagram.com",
      faqs: [],
      /*faqs: [{
          question: "Onde trabalha atualmente?",
          answer: "Em minha casa."
        },
        {
          question: "O que gosta de fazer?",
          answer: "Trabalhar para o site do ENEI! xD"
        }
      ],*/
      //talkDate: "Sexta-feira, 11:42",
      talkTitle: "Will You Disrupt or Be Disrupted in 2018? Digital Transformation and the New Face of Business",
      talkSummary: "A Transformação Digital não é uma buzzword, é uma inevitabilidade. Temas como IoT, blockchain, quantum computing, ou Inteligência Artificial já fazem parte dos nossos dias. Esta sessão pretende fomentar o debate acerca de como a transformação digital está a alterar paradigmas e como poderá ser aplicada a 4 pilares: A co-criação com o cliente; A capacitação do colaborador; A optimização das operações e a Transformação dos produtos.",
      show: true
    },
    {
      id: 3,
      name: "Henrique Ferrolho",
      shortBio: "University of Edinburgh",
      role: "PhD Candidate in Robotics and Autonomous Systems",
      company: "University of Edinburgh",
      fullBio: "Henrique Ferrolho é um antigo estudante da Faculdade de Engenharia da Universidade do Porto. Concluiu o Mestrado Integrado em Engenharia Informática e Computação em 2017. Actualmente, estuda e trabalha na Universidade de Edimburgo, no departamento de Robótica e Sistemas Autónomos, como estudante de doutoramento.",
      image: "henrique_ferrolho.jpg",
      linkedin: "https://www.linkedin.com/in/henriqueferrolho/",
      facebook: "https://www.facebook.com/henriqueferrolho",
      instagram: "https://www.instagram.com/henriqueferrolho/",
      github: "https://github.com/ferrolho",
      website: "https://ferrolho.github.io/",
      faqs: [],
      /*faqs: [{
          question: "Onde trabalha atualmente?",
          answer: "Em minha casa."
        },
        {
          question: "O que gosta de fazer?",
          answer: "Trabalhar para o site do ENEI! xD"
        }
      ],*/
      //talkDate: "Sexta-feira, 11:42",
      talkTitle: "Robotics Mechanics with ThreeJS",
      talkSummary: "",
      show: true
    },
    {
      id: 4,
      name: "Mário Carneiro",
      shortBio: "Life on Mars",
      role: "Full-stack web engineer",
      company: "Life on Mars",
      fullBio: "Mário is a full-stack web engineer working for Life on Mars, with an MSc in Informatics and Computer Engineering from FEUP. Always a geek at heart, he’s happy that he gets to do what he loves everyday and get paid for it.",
      image: "mario_carneiro.jpg",
      linkedin: "https://www.linkedin.com/in/mariocarneiro/",
      faqs: [],
      /*faqs: [{
          question: "Onde trabalha atualmente?",
          answer: "Em minha casa."
        },
        {
          question: "O que gosta de fazer?",
          answer: "Trabalhar para o site do ENEI! xD"
        }
      ],*/
      //talkDate: "Sexta-feira, 11:42",
      talkTitle: "Introduction to the Arduino ecosystem and the internet of things.",
      talkSummary: "Developments in microcontroller technology have made it easier than ever to empower electronics projects with internet connectivity. Armed with very basic notions of electronics, programming and networking every junior engineering student has, this workshop will show you how to consolidate all that knowledge and put it to use to build and connect real-world circuits and devices to the internet. We will build simple circuits using Arduino-like platforms and electronic components, like using temperature and humidity sensors and displaying its readings on a character LCD screen or using a relay switch to control a light bulb. We’ll then use the networking capabilities of the ESP8266 microcontroller to do prototypical Internet of Things tasks, like logging the sensor data with the help of a cloud service, or how to control your physical circuit’s on/off state from a web page. You have to bring your own computer for this, but we’ll provide all the electronic components you’ll need.",
      show: true
    },
    {
      id: 5,
      name: "João Gradim",
      shortBio: "Life on Mars",
      company: "Life on Mars",
      role: "Web Developer",
      fullBio: "João is a web developer also working for Life on Mars, with an MSc in software engineering from FEUP. Passionate about all sorts of software and product development, loves to create and make all sorts of things come to life.",
      image: "joao_gradim.jpg",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-gradim-b41770150/",
      faqs: [],
      //talkDate: "Sexta-feira, 11:42",
      talkTitle: "Introduction to the Arduino ecosystem and the internet of things.",
      talkSummary: "Developments in microcontroller technology have made it easier than ever to empower electronics projects with internet connectivity. Armed with very basic notions of electronics, programming and networking every junior engineering student has, this workshop will show you how to consolidate all that knowledge and put it to use to build and connect real-world circuits and devices to the internet. We will build simple circuits using Arduino-like platforms and electronic components, like using temperature and humidity sensors and displaying its readings on a character LCD screen or using a relay switch to control a light bulb. We’ll then use the networking capabilities of the ESP8266 microcontroller to do prototypical Internet of Things tasks, like logging the sensor data with the help of a cloud service, or how to control your physical circuit’s on/off state from a web page. You have to bring your own computer for this, but we’ll provide all the electronic components you’ll need.",
      show: true
    }
  ]
};