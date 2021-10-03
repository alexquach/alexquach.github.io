import React from "react";
import { Section } from ".";
import { css } from "@emotion/core"

import theme from "../gatsby-plugin-theme-ui";
import { Styled } from "theme-ui";
import ScrollAnimation from "react-animate-on-scroll";

import pattern from "../images/project_pattern.png"

const Projects = () => {
  return (
    <Section
      // backgroundColor={theme.colors.lightgrey}
      id="projects"
      light={false}
      enableWave={false}
      waveBottom={false}
      pattern={`url(${pattern})`}
      opacity={0.02}
    >

        <ScrollAnimation animateIn="animate__fadeInUp" duration={1} css={css`text-align: center`}>
          <h1>Projects</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" duration={1} animateOnce={true}>
          <Styled.p>Here are just a few public (👀) things that I can share. Hoping to do more open source stuff 💯
      </Styled.p>
      Summaries
        * Challenges
      CSN, Airtable, style transfer/generator

      Projects
        * CSN
        * Airtable
        * CycleGAN (lineart) - train more (colab / microsoft)
        * arduino
        * 

      </ScrollAnimation>
        <div css={css`height: 75px`}></div>
    </Section>
  )
}

export default Projects;