import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Navbar } from "./Navbar";
import "./styles.css";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
    </StyledApp>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
