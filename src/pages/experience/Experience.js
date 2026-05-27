import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js"; // Direct card component import!
import "./Experience.css";
import { Fade } from "react-reveal";
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

const experienceData = {
    title: "Internship Experience",
    sections: [
      {
        title: "Internships",
        experiences: [
          {
            title: "Data Engineer Intern",
            company: "Gabriel AI",
            company_url: "https://www.gabrielai.com/",
            logo_path: "gabriel_logo.jpeg", 
            duration: "Sept 2025 - Jan 2026",
            location: "Remote",
            description: [
				"• Built and integrated an AI-powered chatbot using the Gemini API to generate personalized voicemail messages for marketing campaigns.\n\n• Integrated third-party APIs (Telnyx, DropCowboy) for phone number validation and call workflow automation.\n\n• Contributed to building an in-house dialer system, reducing dependency on external vendors.\n\n• Developed a dashboard to monitor call metrics, tracking successfully sent calls and campaign performance.\n\n• Documented system logs and workflows to improve operational efficiency and team collaboration."
			  ],
            color: "#0879bf"
          },
          {
            title: "ML & Data Science Intern",
            company: "National University of Singapore (NUS)",
            company_url: "https://www.nus.edu.sg/",
            logo_path: "nus_logo copy.png",
            duration: "Dec 2022 - Nov 2023",
            location: "Singapore",
            description: [
				"• Built an AI-based image generation model (CineFusion) to generate and modify anime-style images from user input.\n\n• Leveraged AnimeGAN to convert real-world COCO dataset images into anime-style training data, addressing limited domain-specific data availability.\n\n• Handled end-to-end dataset preparation including image preprocessing, caption pairing, and training conditional GAN (cGAN) models.\n\n• Built NLP pipelines using TensorFlow and Keras to analyze facial expressions and classify emotional states from images.\n\n• Explored Microsoft Azure for cloud-based ML workflow deployment and data analysis."
			  ],
            color: "#9b1578"
          },
          {
            title: "Machine Learning Engineer Intern",
            company: "ISRO - ADRIN",
            company_url: "https://www.isro.gov.in/",
            logo_path: "ISRO_logo.png",
            duration: "May 2023 - June 2023",
            location: "Hyderabad, India",
            description: [
				"• Researched and implemented super-resolution deep learning models (SRCNN, LapSRN, AdaptSRCNN) to enhance resolution of satellite imagery.\n\n• Applied image preprocessing and model evaluation techniques on real-world remote sensing datasets.\n\n• Gained hands-on experience deploying neural network models in a government research environment."
			  ],
            color: "#fc1f20"
          }
        ]
      }
    ]
  };

class Experience extends Component {
  render() {
    return (
      <div className="experience-page-root">
        <Header />
        
        <div className="basic-experience-centered">
          <Fade bottom duration={1000} distance="40px">
            <h1 className="experience-centered-title-text">
              {experienceData.title}
            </h1>
          </Fade>
        </div>

        {/* ACCORDION REMOVED: Now we pass information directly straight to your standalone cards layout */}
        <div className="experience-cards-display-container">
          {experienceData.sections[0].experiences.map((experience, index) => {
            return (
              <Fade bottom duration={1000} distance="20px" key={index}>
                <ExperienceCard experience={experience} />
              </Fade>
            );
          })}
        </div>
        
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default () => {
  const { themeMode } = useContext(AppContext);
  return <Experience themeMode={themeMode} />;
};