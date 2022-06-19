import React from "react";
import styled from "styled-components";

import { Catalog } from "./components/Catalog";
import mainBg from "./assets/main-bg.png";
import { Row } from "antd";

const StyledApp = styled(Row)`
  background: url(${mainBg}) center/cover no-repeat;
  min-height: 100vh;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <StyledApp align="middle">
      <Catalog />
    </StyledApp>
  );
};

export default App;
