import React from "react";
import { Section } from "../components";
import { css } from "@emotion/core"

import theme from "../gatsby-plugin-theme-ui";
import { Styled } from "theme-ui";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
    return (
        <Section
            backgroundColor={theme.colors.lightgrey}
            id="about"
            light={false}
            enableWave={false}
            waveBottom={false}
          >

            <ScrollAnimation animateIn="animate__fadeInUp" duration={1} css={css`text-align: center`}>
              <h1>About Me</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" duration={1} animateOnce={true}>
              <Styled.p>Hey! I'm Alex, an undergraduate at MIT studying Computer Science.
                As you might notice from my quite varied experience, I love trying new things
                and am always looking to learn something!
                <br/><br/>
                I try to get my hands dirty in many different areas: from full-stack web dev, to
                data analytics, to product management, to deploying machine learning models. 
                I'm also passionate about Responsible AI as it pertains to making machine learning more transparent,
                interpretable, safe, fair, private, and robust. I'm also interested in the entrepreneurship space, 
                where I'm getting involved in the vibrant Boston ecosystem as a potential founder and as a sourcing investor. 
                I hope to combine these two fields of interest in the future.
              </Styled.p>
            </ScrollAnimation>
            <div css={css`height: 75px`}></div>
          </Section>
    )
}

export default About;