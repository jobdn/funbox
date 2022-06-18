import React from "react";

import "./Card.scss";

import cat from "../../assets/cat.png";
import { Col, Row } from "antd";

export const Card: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={12}>
        <div className="card">
          <div className="card__content">
            <div className="product">
              <div className="product__label">Сказочное заморское</div>
              <div className="product__title">Нямушка</div>
              <div className="product__desc">с фуагра</div>
              <div className="product__amount">
                <span>10</span>
                порций
                <br />
                мышь в подарок
              </div>
            </div>

            <img className="img" src={cat} alt="cat" />
            <div className="weight">
              <div className="weight__value">0,5</div>
              <div className="weight__measure">кг</div>
            </div>
            <div className="corner"></div>
          </div>
          <div className="card__subtitle subtitle">
            <div className="subtitle__text">
              Чего сидишь? Порадуй котэ,
              <a className="subtitle__link">купи</a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
