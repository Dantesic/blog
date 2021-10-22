import Typography from "typography"

const typography = new Typography({
  // baseFontSize: '16px',
  basefontStyle: 'normal',
  baseLineHeight: '1.25',
  headerColor: '#FFFFFF',
  bodyColor: '#FFFFFF',
  headerFontFamily: ['Ubuntu', 'Roboto', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Ubuntu', 'Roboto', 'Helvetica', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '0',
    },
    'a': {
      textDecoration: 'none',
      backgroundImage: "none",
      textShadow: "none",
    },
    'p': {
      marginBottom: '0'
    },
    'hr': {
      background: "none",
    },
    'blockquote': {
      borderColor: "#55C0E0 !important",
      marginLeft: "0 !important",
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography