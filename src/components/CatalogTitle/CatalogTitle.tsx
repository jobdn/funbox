import { Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const StyledCatalogTitle = styled(Row)`
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  /* ant */
  .ant-typography {
    color: #fff;
    font-weight: 100;
    font-size: 36px;
    line-height: 44px;
    @media screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 40px;
    }
  }
`;

export const CatalogTitle: React.FC = () => {
  return (
    <StyledCatalogTitle justify="center">
      <Col>
        <Typography.Text>Ты сегодня покормил кота?</Typography.Text>
      </Col>
    </StyledCatalogTitle>
  );
};
