import React from "react";
import { Section } from "../components";
import { css } from "@emotion/core"

import theme from "../gatsby-plugin-theme-ui";
import ScrollAnimation from "react-animate-on-scroll";
import headshot from "../images/AlexQuachSquare.jpg";
import './small_comps/small_comps.css';

const About = () => {

  return (
    <Section
      backgroundColor={theme.colors.light}
      id="about"
      light={false}
      enableWave={false}
      waveBottom={false}
    >

      <ScrollAnimation
        animateIn="animate__fadeInUp" duration={1} css={css`text-align: center`}
      >
        <h1>About Me</h1>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeInUp" duration={1} animateOnce={true}>
        <div
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={headshot} style={{ width: "300px", height: "300px", borderRadius: "100px", marginRight: "30px" }} />

          <ul className="EmoticonList">
            <li className="Wave EmoticonListItem">
              hey, I'm Alex!
            </li>
            <li className="Computer EmoticonListItem">
              sophomore at MIT, studying Computer Science
            </li>
            <li className="Party EmoticonListItem">
              currently taking a break from classes, and exploring some side interests :)
            </li>
            <li className="Trophy EmoticonListItem">
              excited about making Responsible AI that is more transparent, interpretable, safe, fair, private, and robust!
            </li>
            <li className="Rocket EmoticonListItem">
              always learning about and meeting cool startups, hoping to start my own venture
            </li>
          </ul>

        </div>
      </ScrollAnimation>
    </Section>
  )
}

export default About;