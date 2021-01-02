import { React, useState } from "react"
import { Container, Styled } from "theme-ui"
import Anime from "react-anime"
import { StyledHeader, Nav, NavItem, NavList, NavLink, logoStyle, ScrollLinkStyle } from "./styles"
import logo from "../images/Logo_Rounded.svg"
import "animate.css/animate.min.css";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { useScrollPosition } from "./small_comps/scrollPosition"

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
            alignItems: "center", flexWrap: "nowrap",
            marginTop: "1vh"
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
              <ScrollLink className="small-caps" css={ScrollLinkStyle} to="about" smooth={"easeInOutCubic"} offset={-50}>
                About
              </ScrollLink>
            </NavItem>

            <NavItem>
              <ScrollLink className="small-caps" css={ScrollLinkStyle} to={"work"} smooth={"easeInOutCubic"} offset={-50}>
                Experience
              </ScrollLink>
            </NavItem>

            <NavItem>
              <ScrollLink className="small-caps" css={ScrollLinkStyle} to="projects" smooth={"easeInOutCubic"} offset={-50}>
                Projects
              </ScrollLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
