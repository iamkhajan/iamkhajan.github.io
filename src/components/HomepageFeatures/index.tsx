import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imagePath: string; // Updated to use imagePath
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Digital Transformation',
    imagePath: '/img/digital_transformation.png', // Updated to imagePath
    description: (
      <>
        Leverage experience in transforming business processes, <br />
        data-driven decision making, <br />
        and creating innovative digital products.
      </>
    ),
  },
  {
    title: 'AI/ML Development',
    imagePath: '/img/aiml.png', // Updated to imagePath
    description: (
      <>
        Machine learning models, natural language processing, <br/>
        computer vision, and predictive analytics.
      </>
    ),
  },
  {
    title: 'Deploy Cloud Solutions',
    imagePath: '/img/cicd.png', // Updated to imagePath
    description: (
      <>
      AWS , Azure hosted Solutions <br/>
      CICD pipeline <br/>
      Serverless Solutions <br/>
      </>
    ),
  },
];

function Feature({title, imagePath, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imagePath} className={styles.featureSvg} alt={title} /> {/* Updated to use img tag */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}