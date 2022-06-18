import React from "react";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import { Card } from "../Card";

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
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <HomeTitle>Ты сегодня покормил кота?</HomeTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
    </StyledHome>
  );
};
