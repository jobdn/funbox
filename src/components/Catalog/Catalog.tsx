import React from "react";
import styled from "styled-components";

import { ProductPagination } from "../ProductPagination";
import { CatalogTitle } from "../CatalogTitle";
import { CatalogContent } from "../CatalogContent";

const StyledCatalog = styled.div`
  width: 100%;
`;

export const Catalog: React.FC = () => {
  const [page, setPage] = React.useState(1);

  return (
    <StyledCatalog>
      <CatalogTitle />
      <CatalogContent currentPage={page} />
      <ProductPagination currentPage={page} handleChange={setPage} />
    </StyledCatalog>
  );
};
