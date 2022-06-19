import React from "react";
import styled from "styled-components";

import { Catalog } from "./components/Catalog";
import mainBg from "./assets/main-bg.png";

const StyledApp = styled.div`
  background: url(${mainBg}) center/cover no-repeat;
  min-height: 100vh;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Catalog />
    </StyledApp>
  );
};

export default App;
