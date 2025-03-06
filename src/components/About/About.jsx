import React from "react";
import "./About.css";
import profile from "../../assets/download.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        </div>
        {/* <img src={profile} alt="" /> */}
        <div className="about-sections">
          <div className="about-left">
            <img src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Aspiring software engineer currently pursuing an MCA, eager to
                leverage my skills and passion for technology in a dynamic role.
                Excited to contribute to innovative projects and collaborate
                with a diverse team to solve real world problems.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Javascript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Java</p> <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default About;
