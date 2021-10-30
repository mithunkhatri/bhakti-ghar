import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'भजन',
    Svg: require('../../static/img/bhajan-sangrah.jpg').default,
    description: (
      <>
        भारतीय संगीत के मुख्य रूप से तीन भेद किये जाते हैं। शास्त्रीय संगीत, सुगम संगीत और लोक संगीत। भजन सुगम संगीत की एक शैली है। इसका आधार शास्त्रीय संगीत या लोक संगीत हो सकता है। इसको मंच पर भी प्रस्तुत किया जा सकता है लेकिन मूल रूप से यह किसी देवी या देवता की प्रशंसा में गाया जाने वाला गीत है।
      </>
    ),
  },
  {
    title: 'आरती',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        आरती हिन्दू उपासना की एक विधि है। इसमें जलती हुई लौ या इसके समान कुछ खास वस्तुओं से आराध्य के सामाने एक विशेष विधि से घुमाई जाती है। ये लौ घी या तेल के दीये की हो सकती है या कपूर की। इसमें वैकल्पिक रूप से, घी, धूप तथा सुगंधित पदार्थों को भी मिलाया जाता है। कई बार इसके साथ संगीत (भजन) तथा नृत्य भी होता है। मंदिरों में इसे प्रातः, सांय एवं रात्रि (शयन) में द्वार के बंद होने से पहले किया जाता है
      </>
    ),
  },
  {
    title: 'कथा',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        मन से गढ़ा हुआ या किसी वास्तविक घटना के आधार पर प्रस्तुत किया हुआ विवरण।
        हम लेकर आये हैं हिंदी कथाओं का संग्रह जिसे आप व्रत या किसी अन्य अवसर में पढ़ / सुना सकते हैं।
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={Svg}/>
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
