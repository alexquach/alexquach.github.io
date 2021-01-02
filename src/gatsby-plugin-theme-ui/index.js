import "typeface-open-sans"
import "typeface-pacifico"

const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "ColfaxAI", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'

export default {
  // Global Theme Styles
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    light: "#FFF",
    lightgrey: "rgb(251, 251, 253)",
    dark: "#1E272E",
    black: "#000",
    primary: "#ff7171",
    secondary: "#ffaa71",
    // primary: "#53388a",
    // secondary: "#fd97fd",
    tertiary: "#FFF500",
    background: "#000",
    // background: "#53388a",
    muted: "#f6f6f6",
  },
  fonts: {
    heading: `'ColfaxAI', ${systemFontStack}`,
    body: `'ColfaxAI', ${systemFontStack}`,
  },
  fontSizes: [12, 14, 16, 18, 24, 28, 32, 36, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
  lineHeights: {
    body: 4.5,
    heading: 1.125,
  },
  breakpoints: ["40em", "56em", "64em"],
  borderRadius: "16",
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    p: {
      fontSize: [3, 4],
    },
    h1: {
      fontSize: [7, 8],
      fontFamily: "heading",
    },
    h2: {
      fontSize: [6, 7],
      fontFamily: "heading",
    },
    h3: {
      fontSize: [5, 6],
      fontFamily: "heading",
    },
    // Theme UI Components
    Layout: {
      color: "dark",
      fontFamily: "body",
      fontSize: 1,
    },
    Container: {
      padding: 4,
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
}
