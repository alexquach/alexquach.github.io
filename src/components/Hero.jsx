import { React, useEffect } from "react"
import { StyledHero, StyledHeroText } from "./styles"
import { AnimatedWave, DownArrow } from "./"
import { css } from "@emotion/core"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import { Link as ScrollLink } from "react-scroll";
import Helmet from "react-helmet";

import "./small_comps/metaballs.css"

const Hero = ({ imageAlt, id }) => {

  useEffect(() => {
    if (typeof window !== undefined) {
      require('./small_comps/metaballs.jsx')
    }
  }, []);

  return (
    <span>
      <div style={{ height: "12.5vh" }} />
      <StyledHero id={id}>
        <Helmet>
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Helmet>

        <StyledHeroText>
          <Typist
            avgTypingDelay={1}
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0
            }}
            css={css`font-size: 3em; color: white; display: inline-block`}>
            Hi. I'm Alex
        </Typist>
          <Typist
            startDelay={2000}
            avgTypingDelay={0}>
            Computer&nbsp;Scientist
          <Typist.Delay ms={100} /> | Data&nbsp;Scientist
          <Typist.Delay ms={100} /> | ML&nbsp;Engineer
          <Typist.Delay ms={100} /> | Entrepreneur
          <Typist.Delay ms={500} />...
        </Typist>
          <ScrollLink to={"work"} smooth={"easeInOutCubic"} offset={-100}>
            <DownArrow />
          </ScrollLink>
        </StyledHeroText>

        <AnimatedWave enableWave bottom={false} />
        <AnimatedWave enableWave bottom={true} />
      </StyledHero>
    </span>
  )
}

export default Hero
