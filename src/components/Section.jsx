import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"
import { AnimatedWave } from "./"

const Section = ({
  backgroundColor = "#fff",
  children,
  light,
  id,
  enableWave,
  waveBottom,
  pattern,
  opacity,
}) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      light={light || false}
      id={id}
      pattern={pattern}
      opacity={opacity}
    >
      <Container style={{zIndex: 1}}>
          {children}</Container>
      <AnimatedWave enableWave={enableWave} bottom={waveBottom} />
    </StyledSection>
  )
}

export default Section
