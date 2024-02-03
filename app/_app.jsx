// pages/_app.js
import { ThemeProvider } from "styled-components";
import theme from "../path-to-your-theme/theme";
import GlobalStyle from "../path-to-your-global-style/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
