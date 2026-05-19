import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {Fade} from 'react-reveal';
import './ContactComponent.css';
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

const blogSection = {

	title: "Blogs",
	subtitle:
		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	link: "https://rushabh.info/react-blog-github/#/",
	avatar_image_path: "blogs_image.svg"
};

const addressSection = {
	title: "Address",
	subtitle:
		"Grand Central Dr, Hamilton, NJ 08619, USA",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://www.google.com/maps/place/Grand+Central+Dr,+Hamilton+Township,+NJ+08619/@40.2583206,-74.7077717,17z/data=!3m1!4b1!4m5!3m4!1s0x89c158a0bd3cfe59:0x8297da26f4d8d2c9!8m2!3d40.2583206!4d-74.705583"
};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+1(515) 981-8460"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "rushabh-img-small.png",
    description: "Get in touch with me."
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
									<div className="contact-heading-img-div">
									<center>	<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/></center>
									</div> <br/>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={require(`../../assests/Resume.pdf`)}
											/>
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
										src= {themeMode === "lightTheme" ? require("../../assests/images/blogs_image.svg"): require("../../assests/images/blogs_image-dark.svg")}											alt=""
										/>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
										src= {themeMode === "lightTheme" ? require("../../assests/images/address_image.svg"): require("../../assests/images/address_image-dark.svg")}											alt=""
										alt=""
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
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
	const {themeMode } = useContext(AppContext);
	return (
		<Contact themeMode={themeMode} />
	)
  }