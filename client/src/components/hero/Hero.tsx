import { FC } from 'react';
import './Hero.scss';

export interface IHeroProps {
  bgImage: string;
}

export const Hero: FC<IHeroProps> = ({ bgImage }) => {
  return (
    <div className="hero">
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-content__heading">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="hero-content__paragraph">
          Shop the new Spring 2022 collection today
        </p>
        <div className="hero-content__space" />
        <button className="hero-content__button">View collection</button>
      </div>

      {/* Background Image */}
      <img className="hero__image" src={bgImage} alt="hero" />
    </div>
  );
};
