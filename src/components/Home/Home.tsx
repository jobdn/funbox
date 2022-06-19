import React from "react";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";

import { Card } from "../Card";

import store from "../../store";

const StyledHome = styled.div`
  padding-top: 47px;
`;

const HomeTitle = styled(Typography.Text)`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 100;
  font-size: 36px;
  line-height: 44px;
`;

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <Row justify="center" style={{ marginBottom: "25px" }}>
        <Col>
          <HomeTitle>Ты сегодня покормил кота?</HomeTitle>
        </Col>
      </Row>
      <Row justify="space-around">
        {store.map((product) => (
          <Col>
            <Card product={product} />
          </Col>
        ))}
      </Row>
    </StyledHome>
  );
};
