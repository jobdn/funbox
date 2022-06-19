import React from "react";
import { Col, Row } from "antd";

import { Card } from "../Card";

import { ITEMS_ON_PAGE } from "../../store";
import { useTypedSelector } from "../../hook/redux";

interface ICatalogContentProps {
  currentPage: number;
}

export const CatalogContent: React.FC<ICatalogContentProps> = ({
  currentPage,
}) => {
  const { products } = useTypedSelector((state) => state.products);
  const content = products.slice(
    (currentPage - 1) * ITEMS_ON_PAGE,
    ITEMS_ON_PAGE * currentPage
  );
  return (
    <Row justify="space-around">
      {content.map((product) => (
        <Col key={product.id}>
          <Card product={product} />
        </Col>
      ))}
    </Row>
  );
};
