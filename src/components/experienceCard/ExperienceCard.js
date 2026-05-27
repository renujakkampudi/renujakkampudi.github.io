import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    
    return (
      <div className="experience-card-main-wrapper">
        
        {/* LEFT SIDE COLUMN: Logo Image Container */}
        <div className="experience-card-logo-aside">
          <img
            className="experience-card-vendor-logo"
            src={require(`../../assests/images/${experience.logo_path}`)}
            alt={experience.company}
          />
        </div>

        {/* RIGHT SIDE COLUMN: Structural Text Content */}
        <div className="experience-card-content-block">
          
          {/* Top Banner Row holding Job Role, Company Name, and Timeline Dates */}
          <div className="experience-card-header-banner">
            <div className="experience-card-heading-left-group">
              <h2 className="experience-card-role-title">{experience.title}</h2>
              <h4 className="experience-card-company-link">
                <a href={experience.company_url} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                </a>
              </h4>
            </div>
            
            <div className="experience-card-heading-right-group">
              <span className="experience-card-date-duration">{experience.duration}</span>
              <span className="experience-card-geo-location">{experience.location}</span>
            </div>
          </div>

          {/* Bottom Row holding Bullet Descriptions */}
          <div className="experience-card-details-body">
            <p className="experience-card-bullet-text">
              {experience.description[0]}
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export default ExperienceCard;