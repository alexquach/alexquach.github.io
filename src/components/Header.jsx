import { React, useState } from "react"
import { Container, Styled } from "theme-ui"
import Anime from "react-anime"
import { StyledHeader, Nav, NavItem, NavList, NavLink, logoStyle, ScrollLinkStyle } from "./styles"
import logo from "../images/Pentagon_overrounded.svg"
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { useScrollPosition } from "./scrollPosition"

// const [scrolledUp, setScrolledUp] = useState(false)

// useScrollPosition(({ prevPos, currPos }) => {
//     const activateScrolledUp = currPos.y = 0 && prevPos > 0
//     if (activateScrolledUp) setScrolledUp(activateScrolledUp)
//   }
// , [scrolledUp])

const Header = () => {

  const [scrolledUp, setScrolledUp] = useState(false)
  const [logoHovered, setLogoHovered] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    const activateScrolledUp = currPos.y == 0 && prevPos.y < 0
    if (activateScrolledUp == true) {
      setScrolledUp(activateScrolledUp)
      setLogoHovered(1)
    }
  },
    [scrolledUp],
    false,
    false,
    150
  )


  return (
    <StyledHeader>
      <Container style={{ maxWidth: 95 + "%" }}>
        <Nav>
          <div style={{
            flexDirection: "row", display: "flex",
            alignItems: "center", flexWrap: "nowrap"
          }}
          >

            <Styled.img
              as={ScrollLink}
              css={ScrollLinkStyle}
              to="hero"
              smooth={"easeInOutCubic"}
              className={"animate__animated animate__rollIn"}
              onMouseEnter={() => setLogoHovered(1)}

            >
              <Anime rotateZ={[0, logoHovered * 360]}
                complete={() => setLogoHovered(0)}>
                <img css={logoStyle} src={logo} />
              </Anime>
            </Styled.img>

            <Anime
              opacity={[0, logoHovered]}
              duration={500}
              easing="easeInOutElastic"
              direction="alternate"
              translateX={["-5px", "15px"]}
            >
              <ScrollLink css={ScrollLinkStyle} to="hero" smooth={"easeInOutCubic"}>Alex Quach</ScrollLink>
            </Anime>
          </div>


          <NavList>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to={"work"} smooth={"easeInOutCubic"} offset={-100}>
                Experience
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to="about" smooth={"easeInOutCubic"}>About</ScrollLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
