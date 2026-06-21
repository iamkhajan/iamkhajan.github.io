import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/index.module.css';

interface HighlightCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ image, alt, title, description, link }) => {
  const inner = (
    <div className={clsx('card', styles.featureCard)}>
      <div className="card__image">
        <img src={useBaseUrl(image)} alt={alt} />
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="col col--4 margin-bottom--lg">
      {link ? (
        <Link to={link} style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
          {inner}
        </Link>
      ) : inner}
    </div>
  );
};

export default HighlightCard;
