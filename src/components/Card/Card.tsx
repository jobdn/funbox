import React from "react";

import "./Card.scss";

import cat from "../../assets/cat.png";

export const Card: React.FC = () => {
  return (
    <div className="product">
      <div className="card">
        <div className="card__container">
          <div className="card__info">
            <div className="card__label">Сказочное заморское</div>
            <div className="card__title">
              Нямушка <span>с фуагра</span>
            </div>
            <div className="card__desc">
              <span>10</span>
              порций
              <br />
              мышь в подарок
            </div>
          </div>
          <img className="card__img" src={cat} alt="cat" />
          <div className="product__weight weight">
            <div className="weight__value">0,5</div>
            <div className="weight__measure">кг</div>
          </div>
        </div>
      </div>
      <div className="product__subtitle subtitle">
        <div className="subtitle__text">
          Чего сидишь? Порадуй котэ,
          <a
            href="https://github.com/jobdn/funbox"
            target="_blank"
            className="subtitle__link"
          >
            купи.
          </a>
        </div>
      </div>
    </div>
  );
};
