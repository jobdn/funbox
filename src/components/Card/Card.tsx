import React from "react";

import "./Card.scss";

import cat from "../../assets/cat.png";
import { IProduct, selectProduct } from "../../store/reducers/product";
import { useAppDispatch } from "../../hook/redux";

interface ICardProps {
  product: IProduct;
}

export const Card: React.FC<ICardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  let productClass = product.isAvailable
    ? "product"
    : "product product_not-available";
  if (product.isSelected && product.isAvailable) {
    productClass += " product_selected";
  }

  const cardClass =
    product.borderColor === "pink" ? "card card_pink-bg" : "card";
  const productLabelClass =
    product.label.color === "pink"
      ? "product__label product__label_pink-color"
      : "product__label";

  const handleSelect: React.MouseEventHandler<
    HTMLDivElement | HTMLAnchorElement
  > = (e) => {
    const doSelect = () => {
      dispatch(selectProduct(product.id));
      e.target.removeEventListener("mouseout", doSelect);
    };
    e.target.addEventListener("mouseout", doSelect);
  };

  return (
    <div className={productClass}>
      <div className={cardClass} onClick={handleSelect}>
        <div className="card__container">
          <div className="product__info">
            <div className={productLabelClass}>{product.label.name}</div>
            <div className="product__title">
              Нямушка <span className="product__taste">{product.taste}</span>
            </div>
            <div className="product__desc">
              <span className="product__amount">{product.portionAmount}</span>
              порций
              <br />
              <div className="product__gift">{product.gift}</div>
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
            <a onClick={handleSelect} className="subtitle__link">
              {product.link.label}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
