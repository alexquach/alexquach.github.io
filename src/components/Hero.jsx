import { React, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, StyledParticles, StyledHeroText, ScrollLinkStyle, StyledPentagon } from "./styles"
import { AnimatedWave, DownArrow } from "./"
import Particles from 'react-particles-js'
import { css } from "@emotion/core"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import { Link as ScrollLink } from "react-scroll";
import Helmet from "react-helmet";
import logo from "../images/logo.svg"

import "./metaballs.css"

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ height: undefined, width: undefined });

  useEffect(() => {
    function getWindowDimensions() {
      var width = undefined
      var height = undefined
      width = window.innerWidth
      height = window.innerHeight

      return {
        width,
        height
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    handleResize()
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


const Hero = ({ imageAlt, id }) => {

  const [widthVal, setWidthVal] = useState(0.5)
  // module = require("pathseg/pathseg.js")
  useEffect(() => {
    if (typeof window !== undefined) {
      // module = require("pathseg/pathseg.js")
      require('./metaballs.jsx')
    }
  }, []);
  const { height, width } = useWindowDimensions();
  if (width !== undefined && width !== widthVal) {
    setWidthVal(width)
  }


  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "hero.png" }) {
  //       childImageSharp {
  //         fixed(width: 972, height: 1297) {
  //           ...GatsbyImageSharpFixed_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
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
          css={css`
          font-size: 3em;
          color: white;
          display: inline-block`}>
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
  )
}

export default Hero
