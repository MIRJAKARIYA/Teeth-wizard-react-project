import React from "react";
import MyPicture from "../../aboutJakariya.jpg";
import "./About.css";
import { GrFacebook } from 'react-icons/gr'

const About = () => {
  return (
    <div className="main-about-page-container">
      <div className="d-flex p-5 flex-md-row flex-column about-me-container">
        <div className="about-me-img">
          <img src={MyPicture} className="img-fluid" alt="" />
        </div>
        <div className="about-me-content">
          <h1>About me</h1>
          <p>
            Greetings!!! Thank you for taking the time to look at my webpage.
            Mir Jakariya here. In 2020, I graduated from Daffodil International
            University. My ultimate CGPA is 3.94 after completing a Bsc in
            Electrical and Electronic Engineering at the institution. While
            studying EEE at university, I took some courses such as C
            programming, assembly language, and others, and discovered that I
            was good at programming and problem solving. However, I couldn't
            transfer to another department such as CSE, SWE, or others because I
            had already completed one year of EEE. I spent about a year and a
            half after graduation studying for government employment
            examinations.I was studying for government employment for roughly
            eight hours a day when I suddenly realized I wasn't doing what I
            like, which was programming and problem solving. Then, one day, I
            stopped studying for government positions and began self-teaching
            myself to program. I read a few books and watched a lot of tutorial
            videos on YouTube. For a month, I experimented with Java and Python
            but had no idea what type of work I could accomplish with them. I
            came upon a video about web development and the relevance of
            Javascript, as well as a web development course led by Jhankar
            Mahbub Sir, one day. But by the time I found out about the course,
            it was too late; the course's registration period had ended, and I
            would have to wait three months to be enrolled in the next batch. So
            I waited three months and I learned basic HTML, CSS, and JAVASCRIPT
            in the meanwhile. Finally, the moment arrived for me to enroll in
            the course, and I am currently learning a lot about web development.
            I studied advanced HTML, CSS, and JAVASCRIPT from the course, as
            well as the CSS frameworks Bootstrap and Tailwind CSS, and I am
            presently learning React js, a popular Javascript library that is a
            lot of fun.
          </p>
          <p>
            My long-term goal is to complete the course and find work as a
            junior web developer. I want to pursue a career in this industry,
            and one day I hope to work with big giants such as Google, Facebook,
            and Amazon.
          </p>
          <div>
              <div>
                <GrFacebook></GrFacebook>
              </div>
              <div>

              </div>
              <div>
                  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
