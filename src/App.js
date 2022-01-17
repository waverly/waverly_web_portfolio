// @flow

import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { globalStyles } from "Styles/global";
import { theme } from "Styles/themes";

import Info from "./Views/Info";

injectGlobal`
	${globalStyles}
`;

class App extends Component {
  state = {
    home: [],
    articles: [],
    posts: []
  };

  componentDidMount() {}

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Info />
      </ThemeProvider>
    );
  }
}

export default App;
