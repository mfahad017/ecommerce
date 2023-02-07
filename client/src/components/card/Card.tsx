import { FC } from 'react';
import './Card.scss';

export interface ICardProps {
  icon: FC<React.ComponentProps<'svg'>>;
  heading: string;
  subheading: string;
}

export const Card: FC<ICardProps> = ({ icon: Icon, heading, subheading }) => {
  return (
    <div className="card">
      <Icon className="card__image" />
      <p className="card__heading">{heading}</p>
      <p className="card__subheading">{subheading}</p>
    </div>
  );
};
