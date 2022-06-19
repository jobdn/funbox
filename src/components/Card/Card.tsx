import React from "react";

import "./Card.scss";

import cat from "../../assets/cat.png";

import { IProduct } from "../../store";

interface ICardProps {
  product: IProduct;
}

export const Card: React.FC<ICardProps> = ({ product }) => {
  const productClass = product.isAvailable
    ? "product"
    : "product product_not-available";
  return (
    <div className={productClass}>
      <div className="card">
        <div className="card__container">
          <div className="card__info">
            <div className="card__label">{product.label.name}</div>
            <div className="card__title">
              {/* variety => taste */}
              Нямушка <span className="variety">{product.variety}</span>
            </div>
            <div className="card__desc">
              <span className="portion-amount">{product.portionAmount}</span>
              порций
              <br />
              <div className="gift">{product.gift}</div>
            </div>
          </div>
          <img className="card__img" src={cat} alt="cat" />
          <div className="product__weight weight">
            <div className="weight__value">{product.weight}</div>
            <div className="weight__measure">кг</div>
          </div>
        </div>
      </div>
      <div className="product__subtitle subtitle">
        <div className="subtitle__text">
          {product.subtitleText}
          {product.link ? (
            <a
              href={product.link.href}
              target="_blank"
              className="subtitle__link"
            >
              {product.link.label}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
