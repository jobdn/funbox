import React from "react";
import { Pagination, Row, Col } from "antd";

import store, { ITEMS_ON_PAGE } from "../../store";

interface IPaginationProps {
  currentPage: number;
  handleChange: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductPagination: React.FC<IPaginationProps> = ({
  currentPage,
  handleChange,
}) => {
  const onPageChange = (page: number) => {
    handleChange(page);
  };

  return (
    <Row justify="center" style={{ paddingBottom: "30px" }}>
      <Col>
        <Pagination
          style={{ color: "#fff" }}
          total={store.products.length}
          defaultCurrent={currentPage}
          onChange={onPageChange}
          pageSize={ITEMS_ON_PAGE}
        />
      </Col>
    </Row>
  );
};
