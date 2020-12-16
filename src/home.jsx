import React from "react";
import { css } from "@emotion/core"
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { Global } from "@emotion/core";
import { ThemeProvider } from "theme-ui";

import theme from "./gatsby-plugin-theme-ui";
import { Layout, Styled } from "theme-ui";
import { Header, Hero, Section, Footer, Experience, DownArrow } from "./components";
import { SectionWrap, ProjectList } from "./components/styles";
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
      <Layout>

        <Helmet>
          <html lang={siteLanguage} />
          <title>{siteTitle}</title>
          <meta name="Description" content={siteDescription} />
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Helmet>

        <Header logoTxt={siteLogoText} />
        <div>
          <canvas/>
        </div>
        <SectionWrap>
          <div style={{height: "12.5vh"}}/>
          <Hero id="hero" />

          <Section backgroundColor={theme.colors.white} id="work">
            <ScrollAnimation animateIn="animate__fadeInUp" duration={1} css={css`text-align: center`}>
              <Styled.h2>Experience</Styled.h2>
            </ScrollAnimation>

            <Experience></Experience>
          </Section>

          <Section
            backgroundColor={theme.colors.primary}
            id="about"
            light
            enableWave={true}
            waveBottom={false}
          >
            <div css={css`height: 150px`}>

            </div>
            <ScrollAnimation animateIn="animate__fadeInUp" duration={1} css={css`text-align: center`}>
              <Styled.h2>About Me</Styled.h2>
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

        </SectionWrap>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default HomeTemplate
