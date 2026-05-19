/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Hi I am Rushabh !!!",
	//nickname: "layman_brother",
	// subTitle:
	//   "A passionate data scientist 🚀 having 3+ years of experience and in-depth knowledge of database types, statistical research methodologies, and big data capture, curation, manipulation and visualization",
	subTitle:
		"A passionate data scientist having 3+ years of experience and in-depth knowledge of database types, statistical research methodologies, and big data capture, curation, manipulation and visualization",
	resumeLink:
		"Resume.pdf"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/rushabh31",
	linkedin: "https://www.linkedin.com/in/rushabhpatel5/",
	gmail: "rushabh.patel5@gmail.com",
	facebook: "https://www.facebook.com/rpate307/",
	twitter: "https://twitter.com/rushabhpatel5",
	instagram: "https://www.instagram.com/rushabhpatel5/"
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
      title: "Symbiosis International University",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "siu.png",
      alt_name: "SIU",
      duration: "2011 - 2015",
      descriptions: [" - Bachelor of Technology (B.Tech) in Computer Science"
      ],
      website_link: "http://siu.edu.in"
    },

    {
      title: "University of Illinois",
      subtitle: "MS in Computer Science",
      logo_path: "uis.png",
      alt_name: "UIS",
      duration: "2016 - 2017",
      descriptions: [
        " - Master of Science (MS) in Computer Science GPA - (4.0/4.0)"," - Honors In Computer Science ( For best Academics and Research)"
        ],
      website_link: "http://uis.edu"
    },

    {
      title: "Temple University",
      subtitle: "PhD in Computer Science",
      logo_path: "temple.png",
      alt_name: "temple",
      duration: "2020 - Present",
      descriptions: [
        " - Started PhD in Computer Science (Artificial Intelligence and Applications Track) under the supervision of Dr. Longin Jan Latecki (https://cis.temple.edu/~latecki/)"
      ],
      website_link: "http://temple.edu"
    }



  ]
}

const certifications = {
	certifications: [
		{
			title: "R",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "rlogo.png",
			color_code: "#264653"
		},
		{
			title: "Python",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "pythonlogo.png",
			color_code: "#264653"
		},
		{
			title: "Apache Spark",
			subtitle: " Years of Experience: 1+\n Expertise: Begineer",
			logo_path: "sparklogo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			alt_name: "Google",
			color_code: "#264653"
		},
		{
			title: "Scala",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "scalalogo.png",
			color_code: "#b56576"
		},
		{
			title: "Redshift",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "redshiftlogo.png",
			color_code: "#b56576"
		},
		{
			title: "Tableau",
			subtitle: "Years of Experience: 1+\n Expertise: Begineer",
			logo_path: "tableaulogo.png",
			color_code: "#b56576"
		},
		{
			title: "H2O.ai",
			subtitle: "Years of Experience: 2+\n Expertise: Intermediate",
			logo_path: "h2ologo.png",
			color_code: "#1b4332"
		},
		{
			title: "Tensorflow",
			subtitle: "Years of Experience: < 1\n Expertise: Begineer",
			logo_path: "tflogo.png",
			color_code: "#1b4332"
		},
		{
			title: "PyTorch",
			subtitle: "Years of Experience: < 1 \n Expertise: Begineer",
			logo_path: "pytorch-logo.png",
			color_code: "#1b4332"
		},
		{
			title: "R Shiny",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "shinylogo.png",
			color_code: "#5f0f40"
		},
		{
			title: "GGPLOT2",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "ggplotlogo.png",
			color_code: "#5f0f40"
		},
		{
			title: "SQL",
			subtitle: "Years of Experience: 3+\n Expertise: Advanced",
			logo_path: "sqllogo.png",
			color_code: "#5f0f40"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};




const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+1(515) 981-8460",
  email_address: "rushabh.patel5@gmail.com"
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
