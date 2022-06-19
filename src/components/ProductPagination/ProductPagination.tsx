import React from "react";
import { Pagination, Row, Col } from "antd";

import { ITEMS_ON_PAGE } from "../../store";
import { useTypedSelector } from "../../hook/redux";

interface IPaginationProps {
  currentPage: number;
  handleChange: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductPagination: React.FC<IPaginationProps> = ({
  currentPage,
  handleChange,
}) => {
  const { products } = useTypedSelector((state) => state.products);
  const onPageChange = (page: number) => {
    handleChange(page);
  };

  return (
    <Row justify="center" style={{ paddingBottom: "30px" }}>
      <Col>
        <Pagination
          style={{ color: "#fff" }}
          total={products.length}
          defaultCurrent={currentPage}
          onChange={onPageChange}
          pageSize={ITEMS_ON_PAGE}
        />
      </Col>
    </Row>
  );
};
