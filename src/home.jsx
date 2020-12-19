import React from "react";
import { css } from "@emotion/core"
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { ThemeProvider } from "theme-ui";

import theme from "./gatsby-plugin-theme-ui";
import { Layout, Styled } from "theme-ui";
import { Header, Hero, Footer, Experience, About, Projects } from "./components";
import { SectionWrap, StyledHome } from "./components/styles";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";


const HomeTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteAuthor
          siteLogoText
          siteUrl
          siteLanguage
          siteDescription
          siteKeywords
        }
      }
      dataJson {
        hero {
          imageAlt
        }
        work {
          content
          heading
        }
        about {
          heading
          content
        }
      }
    }
  `)
  const {
    siteTitle,
    siteLogoText,
    siteDescription,
    siteLanguage,
  } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <StyledHome>

        <Helmet>
          <html lang={siteLanguage} />
          <title>{siteTitle}</title>
          <meta name="Description" content={siteDescription} />
          <link href="./globalstyles.css" rel="stylesheet"></link>
        </Helmet>

        <Header logoTxt={siteLogoText} />
        <canvas/>

        <SectionWrap>
          <Hero id="hero" />

          <About/>

          <Experience/>

          <Projects/>

          
        </SectionWrap>
        <Footer />
      </StyledHome>
    </ThemeProvider>
  )
}

export default HomeTemplate
