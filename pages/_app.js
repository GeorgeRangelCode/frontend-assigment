import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust:     100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .site {
    background: #edebeb;
    min-height: 100vh;
  }

  .main,
  .sidebar {
    margin: 0 2em 0 2em;
  }

  .header {
    background: #1a80c7;
    color: white;
    margin-bottom: 4em;
  }

  .main {
    background: #ffffff;
    border-radius: 10px;
  }

  .sidebar {
    background: #ffffff;
  }

  .footer {
    background: #1a80c7;
    color: white;
    margin-top: 4em;
  }

  .footer a:hover,
  .footer a:focus {
    border-bottom: 1px solid white;
  }


  @media screen and (min-width: 600px) {
    @supports (display: grid) {
      .site {
        display: grid;
      }

      .header,
      .footer {
        grid-column: span 8;
      }

      .main {
        grid-column: 1/7;
      }

      .sidebar {
        grid-column: 7/9;
      }
    }
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
