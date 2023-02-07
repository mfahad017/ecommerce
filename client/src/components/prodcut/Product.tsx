import React, { FC } from 'react';
import './Product.scss';

export interface IProductProps {
  id: string;
  title: string;
  price: string;
  image: string;
}

export const Product: FC<IProductProps> = ({ title, price, image }) => {
  return (
    <div className="product">
      <img className="product__image" src={image} alt={`${title} product`} />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">{price}</p>
    </div>
  );
};
