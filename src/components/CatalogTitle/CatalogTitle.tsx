import { Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const StyledCatalogTitle = styled(Typography.Text)`
  font-style: normal;
  font-weight: 100;
  font-size: 36px;
  line-height: 44px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

export const CatalogTitle: React.FC = () => {
  return (
    <Row justify="center" style={{ marginBottom: "25px" }}>
      <Col>
        <StyledCatalogTitle>Ты сегодня покормил кота?</StyledCatalogTitle>
      </Col>
    </Row>
  );
};
