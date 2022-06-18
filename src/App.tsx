import React from "react";
import styled from "styled-components";

import { Home } from "./components/Home";
import mainBg from "./assets/main-bg.png";

const StyledApp = styled.div`
  background: url(${mainBg}) center/cover no-repeat;
  height: 100vh;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  );
};

export default App;
