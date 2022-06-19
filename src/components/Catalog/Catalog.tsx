import React from "react";

import { ProductPagination } from "../ProductPagination";
import { CatalogTitle } from "../CatalogTitle";
import { CatalogContent } from "../CatalogContent";

export const Catalog: React.FC = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <CatalogTitle />
      <CatalogContent currentPage={page} />
      <ProductPagination currentPage={page} handleChange={setPage} />
    </div>
  );
};
