import React from "react";
import client from "../app/lib/util/apollo";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../app/css/theme";
import { GlobalStyle } from "../app/css/GlobalStyle";
import {ApolloProvider} from "@apollo/client";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
          </ThemeProvider>
      </ApolloProvider>
  );
};

export default App;
