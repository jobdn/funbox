import React from "react";
import { Provider } from "react-redux";
import { Row } from "antd";
import styled from "styled-components";

import { Catalog } from "./components/Catalog";
import mainBg from "./assets/main-bg.png";

import store from "./store";

const StyledApp = styled(Row)`
  background: url(${mainBg}) center/cover no-repeat;
  min-height: 100vh;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StyledApp align="middle">
        <Catalog />
      </StyledApp>
    </Provider>
  );
};

export default App;
