import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { Fade } from 'react-reveal';
import './ContactComponent.css';
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

const phoneSection = {
    title: "Phone Number ☎️",
    subtitle: "+1 (602) 880-6244"
};

const ContactData = {
    title: "Contact Me",
    profile_image_path: "1C010BCD-3A5F-4487-B27E-D1A7A42FE4E4_1_105_c.jpeg",
    description: "Discuss a project or just want to say hi? My inbox is open for all!"
};

class Contact extends Component {
    render() {
        const themeMode = this.props.themeMode;

        return (
            <div className="contact-main">
                <Header />
                <div className="basic-contact">
                    <Fade bottom duration={1000} distance="40px">
                        <div className="contact-heading-div">
                            {/* LEFT SIDE: Your Photo inside a perfect circle wrapper */}
                            <div className="contact-heading-img-div">
                                <div className="contact-profile-circle">
                                    <img
                                        src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                                        alt="Renu Jakkampudi"
                                    />
                                </div>
                            </div>
                            
                            {/* RIGHT SIDE: Text content and actions */}
                            <div className="contact-heading-text-div">
                                <h1 className="contact-heading-text">
                                    {ContactData["title"]}
                                </h1>
                                <p className="contact-header-detail-text">
                                    {ContactData["description"]}
                                </p>
                                
                                {/* Dynamically formats and prints your phone section below description */}
                                <div className="phone-info-div">
                                    <h3 className="phone-title">{phoneSection.title}</h3>
                                    <p className="phone-number">{phoneSection.subtitle}</p>
                                </div>

                                <SocialMedia />
                                
                                <div className="resume-btn-div">
                                    <Button
                                        text="See My Resume"
                                        newTab={true}
                                        href={require(`../../assests/Renu Jakkampudi - Data Science.pdf`)}
                                    />
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Footer />
            </div>
        );
    }
}

export default () => {
    const { themeMode } = useContext(AppContext);
    return (
        <Contact themeMode={themeMode} />
    )
};