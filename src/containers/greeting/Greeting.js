import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import React, { useContext } from "react";
import { AppContext } from "../../theme/AppProvider"; // Ensure this is imported!

export default function Greeting() {
  const { themeMode } = useContext(AppContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          
          {/* LEFT SIDE: Real Profile Photo */}
          <div className="greeting-image-div">
            <div className="home-profile-circle">
              <img
                src={require("../../assests/images/972291C1-2534-45B3-9641-3041F4E92013_4_5005_c copy.jpeg")}
                alt="Renu Jakkampudi"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Content Block */}
          <div className="greeting-text-div">
            <div>
              {/* Dynamic headline text color */}
              <h1 className={`home-greeting-name-title ${themeMode === "lightTheme" ? "light-text-title" : ""}`}>
                Renu Jakkampudi
              </h1>
              
              {/* Dynamic description text color based on active theme state */}
              <p className={`greeting-text-p subTitle ${themeMode === "lightTheme" ? "light-mode-desc-text" : "dark-mode-desc-text"}`}>
              Hey👋🏻! I'm Renu. I recently graduated with a master's degree in Data Science from Arizona State University with 4.0 GPA. I've built across domains - from AI-powered chatbots and financial market forecasting systems to deep learning models for satellite imagery - and I'm just getting started. Currently seeking full-time roles where I can turn complex data into real-world impact. 
              </p>

              <p className={`greeting-text-p subTitle ${themeMode === "lightTheme" ? "light-mode-desc-text" : "dark-mode-desc-text"}`}>
                Have a project in mind or want to collaborate? Feel free to reach out - I'd love to connect!
              </p>
              
              {/* Direct Communication Channels */}
              <div className="home-contact-info-block">
                <p className={`home-contact-line ${themeMode === "lightTheme" ? "light-mode-contact" : ""}`}>
                  <strong>Phone:</strong> +1 (602) 880-6244
                </p>
                <p className={`home-contact-line ${themeMode === "lightTheme" ? "light-mode-contact" : ""}`}>
                  <strong>Email:</strong> jakkampudi.renu2002@gmail.com
                </p>
              </div>

              <SocialMedia />

              {/* Activated High-Impact Resume Button Link */}
              <div className="button-greeting-div">
                <Button 
                  text="See My Resume" 
                  newTab={true} 
                  href={require("../../assests/Renu Jakkampudi - Data Science.pdf")} 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}