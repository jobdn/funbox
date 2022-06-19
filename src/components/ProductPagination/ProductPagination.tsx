import React from "react";
import { Pagination, Row, Col } from "antd";

import store from "../../store";

interface IPaginationProps {
  currentPage: number;
  handleChange: React.Dispatch<React.SetStateAction<number>>;
}

const ITEMS_ON_PAGE = 3;

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
          showTotal={(total) => `Total ${total} items`}
          onChange={onPageChange}
          pageSize={ITEMS_ON_PAGE}
        />
      </Col>
    </Row>
  );
};
