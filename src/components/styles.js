import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import theme from "../gatsby-plugin-theme-ui"
import dots from "./small_comps/logo.svg"

export const StyledHome = styled.div`
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
  }
  @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
`

export const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    opacity: 0;
    height: 50%;
    max-height: 50%
    max-width: 50%
  }
`

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: white; // ${theme.colors.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.5vh;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  align-items: center;
`

export const ScrollLinkStyle = css`
  padding: 1rem 0;
  color: ${theme.colors.dark};
  text-decoration: none;
  cursor: pointer;
  transition: 0.27s ease;
  &:hover,
  &:focus {
    filter: brightness(0.9);
  }
`

export const NavItem = styled.li`
  padding-left: 1rem;
`

export const SectionWrap = styled.main`
  min-height: 400px;
`

export const StyledHero = styled.section`
  scroll-snap-align: start;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  height: 87.5vh;
`

export const StyledPentagon = styled.section`
  width: 100%;
  scroll-snap-align: start;
  background-color: transparent;
  // background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==");
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iDQogImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogd2lkdGg9IjMwMC4wMDAwMDBwdCIgaGVpZ2h0PSIyODcuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAzMDAuMDAwMDAwIDI4Ny4wMDAwMDAiDQogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+DQo8bWV0YWRhdGE+DQpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xMCwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTENCjwvbWV0YWRhdGE+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyODcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIg0KZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSJub25lIj4NCjxwYXRoIGQ9Ik0xNDMwIDI2ODcgYy01NiAtMzQgLTI0MyAtMTYwIC01NDIgLTM2NyAtOTIgLTYzIC0yNTIgLTE3MiAtMzU1DQotMjQzIC0yNzYgLTE4NyAtMjgzIC0xOTMgLTMyMSAtMjY3IC01MiAtMTA0IC04NCAtMjAxIC03OCAtMjM1IDQgLTE2IDE5IC02NA0KMzUgLTEwNSAxNiAtNDEgNDQgLTExMyA2MSAtMTYwIDE4IC00NyAzOCAtOTggNDUgLTExNSA3IC0xNiA0MSAtMTA0IDc1IC0xOTUNCjM1IC05MSA3MSAtMTgzIDgwIC0yMDUgMTAgLTIyIDUxIC0xMjcgOTEgLTIzMyA0MSAtMTA2IDgyIC0yMDEgOTEgLTIxMSA5IC0xMQ0KMjAgLTM0IDIzIC01MyA0IC0xOCAyMSAtNjMgMzggLTk4IGwzMiAtNjUgMjg1IDEgYzI2NyAxIDc4MSAxNiAxMDQwIDMwIDEwOSA2DQoxMzUgMTEgMTcwIDMzIDggNiA0MSAyMiA3MyAzNyAzMSAxNCA1NyAzMCA1NyAzNSAwIDUgNyA5IDE1IDkgOSAwIDM1IDE5IDU4DQo0MyAzNSAzNSA0NyA1OSA3MSAxMzcgMTYgNTIgNDkgMTU0IDczIDIyNyAyMyA3MyA0MyAxNDEgNDMgMTUxIDAgMTAgNCAyMiA5DQoyOCA4IDggMzIgODIgMTI2IDM5MCAxNCA0NCAyNSA4NiAyNSA5MiAwIDcgNCAyMCAxMCAzMCAxNyAzMSA0OSAxNTEgNDUgMTcxDQotMiAxMSAtOCAyOCAtMTQgMzkgLTYgMTEgLTggMjIgLTQgMjUgOCA5IC01NiAxODYgLTc5IDIxOSAtMTggMjYgLTE3MiAxNDQNCi00MzggMzM4IC02MyA0NiAtMTQ2IDEwNyAtMTg1IDEzNSAtMzggMjggLTExMyA4MiAtMTY1IDEyMCAtNTIgMzggLTExNyA4NQ0KLTE0NSAxMDYgLTI3IDIwIC03NCA0OSAtMTAyIDY1IC0yOSAxNSAtNTMgMzEgLTUzIDM1IDAgMTAgLTkxIDc1IC0xMTUgODMgLTEzDQo0IC0zOSAtNiAtNzUgLTI3eiBtMTMyIC00MyBjMzUgLTI1IDY0IC00NyA2NiAtNDkgMiAtMSAtMjMgLTIwIC01NSAtNDIgLTEwMw0KLTY5IC0zMzIgLTIyNiAtNDkzIC0zMzggLTI1IC0xNyAtOTAgLTYyIC0xNDUgLTEwMCAtNTUgLTM4IC0xMzYgLTkzIC0xODANCi0xMjMgLTE3MSAtMTE3IC0yNDEgLTE2NyAtMjc3IC0xOTQgbC0zNyAtMjkgMTkgLTQyIGMxOCAtNDIgMTM0IC0zMzIgMjI1DQotNTYyIDQ2IC0xMTYgODEgLTIwMSAxOTkgLTQ4NyAzMSAtNzUgNTYgLTEzOSA1NiAtMTQyIDAgLTMgLTM1IC02IC03OCAtNg0KbC03OCAwIC0xMDYgMjYzIGMtNTkgMTQ0IC0xNTMgMzc1IC0yMDkgNTEyIC01NSAxMzggLTEyOCAzMTUgLTE2MCAzOTQgLTMyIDgwDQotNTggMTQ1IC01NiAxNDYgMSAxIDM4IDI2IDgyIDU2IDQ0IDMxIDEzMiA5MSAxOTUgMTM0IDYzIDQ0IDE2OSAxMTYgMjM1IDE2MQ0KMTExIDc3IDI3NyAxOTAgNTkzIDQwNiA3MCA0OCAxMzAgODggMTM0IDg4IDUgMCAzNiAtMjEgNzAgLTQ2eiBtMzQwIC0yNDUNCmMxMjMgLTg5IDI3OSAtMjAzIDM0OCAtMjU0IDY5IC01MCAxNTQgLTExMiAxOTAgLTEzOCAzNiAtMjYgMTA3IC03OCAxNTkgLTExNQ0KbDkzIC02OSAzNCAtODggYzE5IC00OSA0MCAtOTUgNDYgLTEwMiAzMiAtMzkgLTE0IC0xNCAtMTI4IDY5IC03MSA1MiAtMjgxDQoyMDQgLTQ2NyAzMzggLTE4NiAxMzUgLTM3NCAyNzEgLTQxOCAzMDMgLTQ0IDMxIC04NSA1NyAtOTMgNTcgLTcgMCAtMjQgLTgNCi0zNyAtMTggLTEzIC0xMSAtMTQxIC05OCAtMjg0IC0xOTQgLTE0MyAtOTYgLTM3MiAtMjUwIC01MTAgLTM0MyAtMTM3IC05Mg0KLTI2MCAtMTc3IC0yNzIgLTE4OCAtMTMgLTExIC0yNSAtMTkgLTI3IC0xNiAtNSA1IC00NiAxMTIgLTQ2IDExOSAwIDUgNzkgNjANCjU5OCA0MTcgMTkxIDEzMSAyMjcgMTU2IDQzMiAyOTggNzQgNTIgMTQwIDkyIDE0NyA5MCA2IC0yIDExMiAtNzcgMjM1IC0xNjZ6DQptLTE5OSAtNjEgYzE4IC0xMiAzNyAtMjYgNDIgLTMxIDE1IC0xMiAyMjUgLTE2NSAyNjUgLTE5MiAxOSAtMTMgNzYgLTUzIDEyNQ0KLTkwIDI3MyAtMTk5IDYxOCAtNDQ2IDYzMyAtNDUyIDIyIC05IDI1IDEgLTE0MiAtNTMzIC01MiAtMTY4IC0xMTQgLTM2NiAtMTM3DQotNDQwIC04MiAtMjY3IC02NyAtMjM5IC0xNTUgLTI5NyAtNDMgLTI5IC04NiAtNTkgLTk2IC02NyAtMTYgLTE0IC0xOCAtMTQNCi0xOCA0IDAgMTEgNiAzNyAxNCA1NyA4IDIxIDIxIDYzIDMwIDkzIDggMzAgNDggMTU5IDg3IDI4NSAzOSAxMjcgNzQgMjQ0IDc5DQoyNjAgMTQgNTEgODYgMjkzIDEyOSA0MzUgbDQxIDEzNSAtMjIgMTUgYy0xMiA4IC00NCAzMSAtNzAgNTAgLTI2IDE5IC05OCA3Mg0KLTE2MCAxMTcgLTYyIDQ2IC0xNzAgMTI1IC0yMzkgMTc1IC03MCA1MSAtMTgwIDEzMSAtMjQ0IDE3OCAtNjQgNDcgLTE2NCAxMTkNCi0yMjAgMTYxIGwtMTA0IDc2IDU3IDQxIGMzMSAyMiA2MSA0MSA2NSA0MSA1IDEgMjMgLTkgNDAgLTIxeiBtLTE1NiAtOTEgYzExDQotMTkgMTY2IC0xMzUgNTM4IC00MDcgMTc2IC0xMjggMzI4IC0yNDAgMzM3IC0yNDkgMTYgLTE1IDE1IC0yMCAtMTIgLTgxIC0xNw0KLTM2IC0zMyAtODIgLTM2IC0xMDMgLTQgLTIwIC0xMSAtNDAgLTE1IC00MyAtNSAtMyAtOSAtMTYgLTkgLTI5IDAgLTEzIC00DQotMjUgLTggLTI3IC00IC0xIC0zNiAtOTEgLTcxIC0xOTggLTM1IC0xMDcgLTY4IC0yMDQgLTcyIC0yMTUgLTUgLTExIC0yOSAtODMNCi01NCAtMTYwIC0yNSAtNzcgLTUwIC0xNTEgLTU1IC0xNjUgbC0xMCAtMjUgLTQ2MSAtMyBjLTI1MyAtMSAtNDY4IC02IC00NzcNCi0xMCAtMjkgLTEzIC0xNjIgLTcgLTE3NiA5IC03IDggLTIzIDQ2IC0zNiA4NCAtMjEgNjQgLTUyIDE0MyAtODUgMjIwIC03IDE3DQotMjkgNzIgLTQ5IDEyMiAtODcgMjIzIC0xMDkgMjc5IC0xMTcgMjg4IC01IDUgLTkgMTUgLTkgMjIgMCA3IC0yNyA4MSAtNjANCjE2NCAtMzMgODMgLTYwIDE1OCAtNjAgMTY4IDAgMTAgMTIgMjMgMjYgMzAgMjUgMTEgMzUyIDIyOSA3NDQgNDk0IDEwMiA2OQ0KMTkzIDEyNiAyMDIgMTI2IDkgMSAyMSAtNSAyNSAtMTJ6IG0tMTI3NSAtNTUyIGM0NSAtMTEzIDIxNiAtNTM1IDI1OCAtNjM1IDE3DQotNDEgNDAgLTk3IDUwIC0xMjUgMjQgLTY1IDE3NyAtNDM1IDE4MiAtNDQwIDMgLTMgMzAwIDMgMTAxOCAyMyAxNTEgNSAyNzcgNw0KMjc5IDUgMiAtMiAtNCAtMjkgLTE0IC02MiBsLTE5IC01OSAtOTYgLTYgYy04NyAtNiAtMjMzIC0xMSAtMTAyMCAtMzYgLTE0Ng0KLTQgLTI2OCAtNSAtMjcyIC0xIC00IDMgLTQ4IDExMiAtOTggMjQxIC01MCAxMjkgLTExNiAyOTYgLTE0NSAzNzAgLTYzIDE1OA0KLTE1MSAzODQgLTE5MCA0OTAgLTE2IDQxIC0zMiA3OSAtMzcgODUgLTQgNSAtOCAyMCAtOCAzNSAtMSAzMyA2MyAyMjIgNzEgMjEyDQozIC00IDIyIC00NyA0MSAtOTd6IG0yMjM3IC0xNzEgbDQ4IC0zNiAtMjkgLTk2IGMtMTcgLTU0IC00MSAtMTMzIC01NCAtMTc3DQotMTQgLTQ0IC0yOSAtOTMgLTM0IC0xMTAgLTE3IC02MCAtNzAgLTIzNyAtMTY1IC01NTAgLTUzIC0xNzYgLTk3IC0zMjcgLTk4DQotMzM3IC0xIC0yMSAtNjIgLTI1IC01NzIgLTM4IC0yMDkgLTYgLTQwMCAtMTIgLTQyNSAtMTUgLTI1IC0yIC0xMzkgLTUgLTI1NQ0KLTYgbC0yMDkgLTEgLTMyIDc2IGMtMzYgODUgLTM1IDg3IDM2IDg0IDI1IC0xIDE4NCA0IDM1NSAxMCAxNzEgNiA0NjAgMTcgNjQyDQoyNCBsMzMzIDEyIDE5IDUwIGMxMCAyOCAxMDEgMjk3IDIwMSA1OTkgMTAwIDMwMSAxODQgNTQ3IDE4NiA1NDcgMyAwIDI2IC0xNg0KNTMgLTM2eiIvPg0KPC9nPg0KPC9zdmc+DQo=");
  //background-image: url(${dots});
  background-size: 30px;
  background-repeat: space;
  background-blend-mode: lighten;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  height: 100vh;
`

export const StyledParticles = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
`

export const StyledHeroText = styled.div`
  color: white;
  font-family: "Segoe UI Light", "Open Sans", "sans-serif";
  padding-left: 30px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 15px;
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const dashAnimation = length => css`
  animation: ${dash} ${length} linear forwards;
`

export const zoomAnimation = length => css`
  animation: ${zoom} ${length} linear infinite;
`

export const moveAnimation = length => css`
  animation: ${move} ${length} linear infinite;
`

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`
const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`

const zoom = keyframes`
  50% {
    transform:scale(1.2) skew(2deg, 2deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const WaveWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
  ${({ bottom }) =>
    bottom &&
    css`
      transform: matrix(-1, 0, 0, -1, 0, 0);
    `}
`

export const InnerWave = styled.div`
  width: 100%;
  height: 10vh;
  left: 0;
  position: absolute;
  svg {
    width: 100%;
    height: 10vh;
  }
  path {
    ${waveAnimation("20s")};
  }
  ${({ layer, waveoffset }) => ({
    zIndex: layer && layer,
    top: waveoffset && waveoffset,
  })}
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 400px;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    min-height: 70vh;
    height: auto;
  }
  ${({ backgroundColor, light }) => ({
    background: backgroundColor && backgroundColor,
    color: light ? theme.colors.light : theme.colors.dark,
  })}
`

export const SplashImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85vh;
  object-fit: contain;
  object-position: bottom;
  user-select: none;
`

export const SplashImageObj = {
  position: "absolute",
  top: "unset",
  bottom: 0,
  right: 0,
  width: "100%",
  height: "85vh",
  objectFit: "contain",
  objectPosition: "bottom",
  userSelect: "none",
}

export const ProjectList = styled.ul`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  padding: 0 0 1.5rem;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    overflow: unset;
    flex-wrap: wrap;
  }
`

export const StyledProjectItem = styled.li`
  scroll-snap-align: start;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  min-width: 250px;
  margin: 1rem 1.5rem 0rem 0rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.27s ease;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    flex: 1 1 45%;
    max-width: 45%;
  }
  &:hover {
    transform: scale(1.025);
  }
  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
`

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 275px;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 1rem;
    background: linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    z-index: 2;
    opacity: 0.75;
    pointer-events: none;
    filter: brightness(0.75) saturate(1.5);
  }
`

export const ProjectImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  ${zoomAnimation("40s")}
  overflow: hidden;
`

export const ProjectContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
`

export const ProjectTitle = styled.h3`
  color: ${theme.colors.light};
  margin-bottom: 0;
  margin-right: auto;
`

export const ProjectBadge = styled.p`
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  margin-bottom: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: ${theme.fontSizes[1]}px;
  text-transform: capitalize;
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1rem 0 0;
`
export const FooterBox = styled.div`
  background: ${theme.colors.light};
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-size: ${theme.fontSizes[1]}px;

  > p {
    margin: 0;
  }
`

export const Avatar = styled.img`
  border-radius: 1rem;
`

export const HyperLink = styled.a`
  cursor: pointer;
  font-weight: ${theme.fontWeights.semiBold};
  text-decoration: none;
  color: ${theme.colors.dark};
`

export const logoStyle = css`
  max-height: 100%;
  height: 8vh;
  filter: invert(95%) sepia(100%) saturate(21%) hue-rotate(345deg) brightness(0%) contrast(107%);
  margin-top: auto;
  margin-bottom: auto;
  `
