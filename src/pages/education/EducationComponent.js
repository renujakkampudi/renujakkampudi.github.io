import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from '../../containers/certifications/Certifications';
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import {competitiveSites}  from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";


class Education extends Component {
  
  render() {
    const themeMode = this.props.themeMode;
    return (
      <div className="education-main">
        <Header />
        <div className="basic-education">
          
          <Educations/>
          <Certifications />

        </div>
        <Footer />

      </div>
    );
  }
}


export default () => {
  const {themeMode } = useContext(AppContext);
  return (
      <Education themeMode={themeMode} />
  )
}