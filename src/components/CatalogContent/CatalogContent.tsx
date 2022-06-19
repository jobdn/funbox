import React from "react";
import { Col, Row } from "antd";

import { Card } from "../Card";

import store, { ITEMS_ON_PAGE } from "../../store";

interface ICatalogContentProps {
  currentPage: number;
}

export const CatalogContent: React.FC<ICatalogContentProps> = ({
  currentPage,
}) => {
  const content = store.products.slice(
    (currentPage - 1) * ITEMS_ON_PAGE,
    ITEMS_ON_PAGE * currentPage
  );
  return (
    <Row justify="space-around">
      {content.map((product, index) => (
        <Col key={index}>
          <Card product={product} />
        </Col>
      ))}
    </Row>
  );
};
