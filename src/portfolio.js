const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
  username: "Renu Jakkampudi",
  title: "Renu Jakkampudi",
  nickname: "renujakkampudi",
  subTitle:
    "I turn messy data into meaningful decisions. MS Data Science graduate from ASU with hands-on experience building ML models, data pipelines, and AI-powered applications — now looking for my next challenge.",
  resumeLink:
    "https://example.com/your-resume.pdf", // Swap this with your actual Google Drive or hosted resume link later
  portfolio_repository: "https://github.com/renujakkampudi/renujakkampudi.github.io",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/renujakkampudi",
	linkedin: "https://www.linkedin.com/in/renu-jakkampudi-451224203/",
	gmail: "jakkampudi.renu2002@gmail.com",
};

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      imagePath: "machine-learning.svg",
      imagePathDark: "machine-learning-dark.svg",
      skills: [
        "Applying natural language processing methods to clinical text to extract structured information. Using the latest deep learning techniques to classify imaging studies. Applying statistical models (with a focus on Bayesian methods) to assist researchers in analyzing missing,erroneous or incomplete patient data. Writing tools and visualizations to surface data insights from the above methods to researchers"
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon-sql",
          style: {
            backgroundColor: "transparent"
          }
        }
      ]
    },
    {
      title: "Data Visualization",
      imagePath: "data-visualization.svg",
      imagePathDark: "data-visualization-dark.svg",
      skills: [
        "Report and visualize results of statistical analyses, in the form of graphs, charts, and tables. To produce data insights, conduct regular data mining and exploratory analyses across analytics spectrum to ensure data quality & integrity. Develop dashboards to illustrate data insight and describe predictive modeling output."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "D3",
          fontAwesomeClassname: "logos:d3",
          style: {
            color: "#663399"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      imagePathDark: "cloud_infrastructure-dark.svg",
      skills: [
        " Experience working on multiple cloud platforms. Create and maintain framework for deploying machine on Cloud. Engineer computational solutions and develop algorithms and deploying them through REST API in production"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "API",
          fontAwesomeClassname: "carbon:api-1",
          style: {
            color: "#FF7C00"
          }
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        }
      ]
    },
    {
      title: "Package Development",
      imagePath: "ui_ux_design.svg",
      imagePathDark: "ui_ux_design-dark.svg",
      skills: [
        " Designed multiple R packages for the community to make vis easy. Developed a R Package to facilitate contact tracing on visit-based data with a specific focus on providers of community-based healthcare. Packaging and deploying them for the public usage"
      ],
      softwareSkills: [
        {
          skillName: "RStudio",
          fontAwesomeClassname: "simple-icons:rstudio",
          style: {
            color: "#005daa"
          }
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#3569c4"
      },
      profileLink: "https://scholar.google.com/citations?user=VjR1JYQAAAAJ&hl=en"
    },
    {
      siteName: "Stackoverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#f48024"
      },
      profileLink: "https://stackoverflow.com/users/7120667/rushabh-patel"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/rushabhpatel"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Arizona State University",
      subtitle: "Master of Science in Data Science (Computing and Decision Analytics)",
      logo_path: "asu_logo.png", // You can drop an ASU logo image into src/assests/images/ later
      alt_name: "ASU",
      duration: "2024 - 2026",
      descriptions: [
        " - Concluded graduate studies with a perfect 4.0 / 4.0 GPA.",
        " - Specialized in core machine learning pipelines, scalable backend engineering, and data warehouse architectures.",
        " Coursework : Data Processing at Scale, Data Mining, Statistics for Data Analysts, Statistical Machine Learning, Analyzing Big Data, Semantic Web Mining, Computing Data-Driven Optimization."
      ],
      website_link: "https://www.asu.edu"
    },
    {
      title: "Vellore Institute of Technology",
      subtitle: "Bachelor of Science in Computer Science and Engineering",
      logo_path: "vit_logo.png", // You can drop a VIT logo image into src/assests/images/ later
      alt_name: "VIT",
      duration: "2020 - 2024",
      descriptions: [
        " - Built a strong foundation in advanced data structures, algorithmic design, and software engineering principles principles using Python, C and C++.",
        "Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning, Software Engineering."
      ],
      website_link: "https://vit.ac.in"
    }
  ]
};

const certifications = {
  certifications: [
    {
      title: "Oracle Machine Learning Autonomous Database Specialist",
      subtitle: "Enterprise Database Optimization & Cloud ML Deployment",
      logo_path: "oracle_logo.png", // Temporarily using gcp_logo placeholder, or use a custom oracle icon later
      color_code: "#264653"
    },
    {
      title: "Google Advanced Data Analytics",
      subtitle: "Professional Certification — Statistical Modeling & Predictive Analysis",
      logo_path: "google_logo.png",
      color_code: "#264653"
    },
    {
      title: "Python",
      subtitle: "Expertise: Core DSA, Predictive Modeling & Advanced Scripting",
      logo_path: "pythonlogo.png",
      color_code: "#264653"
    },
    {
      title: "PyTorch",
      subtitle: "Expertise: Deep Learning, Emotion Detection & Computer Vision",
      logo_path: "pytorch-logo.png",
      color_code: "#1b4332"
    },
    {
      title: "TensorFlow",
      subtitle: "Expertise: Neural Network Architectures & Model Training",
      logo_path: "tflogo.png",
      color_code: "#1b4332"
    },
    {
      title: "SQL",
      subtitle: "Expertise: Complex Queries, Data Curation & Analytical Window Functions",
      logo_path: "sqllogo.png",
      color_code: "#5f0f40"
    },
    {
      title: "Snowflake",
      subtitle: "Expertise: Cloud Data Warehousing & Large-Scale Data Operations",
      logo_path: "snowflake_logo.png", // Uses an existing template pattern block or custom snowflake icon
      color_code: "#5f0f40"
    },
    {
      title: "Tableau",
      subtitle: "Expertise: Interactive Dashboards & Exploratory Metrics Visualization",
      logo_path: "tableaulogo.png",
      color_code: "#b56576"
    }
  ]
};

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "renujakkampudi"
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all!",
  number: "+1 (602) 880-6244",
  email_address: "jakkampudi.renu2002@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	contactInfo
};
