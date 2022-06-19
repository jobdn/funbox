import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import { Card } from "../Card";
import { ProductPagination } from "../ProductPagination";
import { CatalogTitle } from "../CatalogTitle";

import store from "../../store";

const StyledCatalog = styled.div`
  padding-top: 47px;
`;

export const Catalog: React.FC = () => {
  const [page, setPage] = React.useState(1);
  console.log(page);

  return (
    <StyledCatalog>
      <CatalogTitle />
      <Row justify="space-around">
        {store.products.map((product, index) => (
          <Col key={index}>
            <Card product={product} />
          </Col>
        ))}
      </Row>
      <ProductPagination currentPage={page} handleChange={setPage} />
    </StyledCatalog>
  );
};
