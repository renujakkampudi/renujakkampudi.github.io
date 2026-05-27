import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from "../../components/button/Button";
import {Fade} from 'react-reveal';
//import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';


const projectsData = [
	{
	  title: "Multi-Modal Market Regime Detection & Forecasting",
	  description: "Built a machine learning framework to detect latent financial market regimes (Bull, Bear, High-Volatility) using Gaussian Hidden Markov Models trained on S&P 500 returns. Engineered 37 multi-modal features combining macroeconomic metrics via FRED API and FinBERT-derived news sentiment.",
	  languages: ["Python", "Machine Learning", "NLP", "LightGBM", "LSTM", "HMM"],
	  image: "finance.png",
	  projectLink: "https://github.com/renujakkampudi/capstone"
	},
	{
	  title: "Spotify Music Trend Analysis",
	  description: "Analyzed 32K+ Spotify tracks to isolate key factors influencing track popularity using PCA, KMeans clustering, and Random Forest feature importance models. Built an interactive Tableau dashboard highlighting genre distributions and top artist trends.",
	  languages: ["Python", "Tableau", "EDA", "Machine Learning", "Data Visualization"],
	  image: "spotify.png",
	  projectLink: "https://github.com/renujakkampudi/Spotify-song-analysis"
	},
	{
	  title: "RL Based Movie Recommendation Model",
	  description: "Developed a hybrid movie recommendation engine combining reinforcement learning (epsilon-greedy), collaborative filtering, and content-based filtering algorithms to optimize user exploration-exploitation discovery metrics.",
	  languages: ["Reinforcement Learning", "Python", "Django", "Recommender Systems"],
	  image: "movie.png",
	  projectLink: "https://github.com/renujakkampudi/CineCurate-Hybrid-RL-based-Recommendation-Model"
	},
	{
	  title: "Multifaceted Genomic Variation Analysis",
	  description: "Built a production-grade knowledge graph integrating genomic and clinical datasets to study complex gene-variant-disease vectors. Applied Graph Neural Networks (GNNs) for high-accuracy disease classification and multi-relational path tracking.",
	  languages: ["Machine Learning", "Data Visualization", "GNNs", "Graph Theory"],
	  image: "genes.png",
	  projectLink: "https://github.com/renujakkampudi"
	},
	{
	  title: "Book Redirect Recommendation System",
	  description: "Designed a cross-content matching book recommendation framework utilizing advanced NLP vector tracking (Bag of Words, RAKE extraction). Developed a clean, responsive Streamlit deployment interface for fast vector querying.",
	  languages: ["NLP", "Python", "Recommender Systems", "Streamlit"],
	  image: "books.png",
	},
	{
	  title: "Medical Alert Emotion Detection Pipeline",
	  description: "Developed a computer vision deep learning pipeline using custom Convolutional Neural Networks (CNN) to classify clinical patient emotional states from facial frames, utilizing robust augmentation and normalization passes.",
	  languages: ["Deep Learning", "Python", "CNN", "Computer Vision"],
	  image: "medical.png",
	}
  ];
  
  class Projects extends Component {
	render() {
	  return (
		<div className="projects-page-root">
		  <Header />
  
		  {/* The Card Layout Grid Wrapper */}
		  <div className="repo-cards-div-main">
			{projectsData.map((project, index) => {
			  return (
				<Fade bottom duration={1000} distance="20px" key={index}>
				  <div className="project-tile-card">
					{/* Image/Visual Placeholder Top Area */}
					<div className="project-card-image-placeholder">
						{project.image ? (
							<img 
							src={require(`../../assests/images/${project.image}`)} 
							alt={project.title}
							className="project-card-banner-img"
							/>
						) : (
							<div className="project-card-image-overlay">
							<span className="project-icon-code">&lt;/&gt;</span>
							</div>
						)}
					</div>
					
					{/* Body Context Block */}
					<div className="project-card-body-content">
					  <h3 className="project-card-title-heading">
						{project.title}
					  </h3>
					  <p className="project-card-description-text">
						{project.description}
					  </p>
					  
					  {/* Tech Stack Chip Badging Block */}
					  <div className="project-card-chips-wrapper">
						{project.languages.map((tech, tIdx) => (
						  <span key={tIdx} className="project-tech-badge">
							{tech}
						  </span>
						))}
					  </div>
					  
					  {/* Repository Action Redirect Trigger Anchor */}
					  <a 
						href={project.projectLink} 
						target="_blank" 
						rel="noopener noreferrer" 
						className="project-card-redirect-link"
					  >
						<span className="link-arrow-icon">➔</span> View Project
					  </a>
					</div>
				  </div>
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
  
  export default Projects;
