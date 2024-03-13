import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frontend',
    Svg: require('@site/static/img/landing-page/frontend_montains.svg').default,
    skills: [
      ['Javascript', 'JQuery'],
      ['ReactJS', 'Recoil'],
      ['Responsive design'],
      ['Web maps', 'Bootstrap'],
      ['TailwindCSS', 'HTML5'],
      ['Showing what we get!']
    ],
  },
  {
    title: 'Backend',
    Svg: require('@site/static/img/landing-page/backend_bricks.svg').default,
    skills: [
      ['Python', 'NodeJS'],
      ['Flask', 'ExpressJS'],
      ['REST APIs', 'Linux'],
      ['SQL', 'C / C++'],
      ['Java', 'PM2'],
      ['I got your back!']
    ]
  },
  {
    title: 'Altogether',
    Svg: require('@site/static/img/altogether_tower.svg').default,
    skills: [
      ['Docker', 'CI/CD'],
      ['Design patterns'],
      ['Software engineering'],
      ['ML / AI', 'Git'],
      ['Unit / end-to-end tests'],
      ["There is 'I' in 'integration'!"]
    ],
  },
];

function Feature({Svg, title, skills}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={`text--center padding-horiz--md ${styles.skillsVault}`} >
        <Heading as="h3">{title}</Heading>
        { skills && (
          <div className={styles.skillsBox}> {
            skills.map((skill, idx) => (
              <div key={idx} className={styles.skillsLine}>
                {
                  (skill.length === 1) ?
                  (<div className={styles.skill}>{skill[0]}</div>) : 
                  (
                    <>
                      <div className={styles.skill}>{skill[0]}</div>
                      <div className={styles.skill}>{skill[1]}</div>
                    </>
                  )
                }
              </div>
            ))
          }
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
