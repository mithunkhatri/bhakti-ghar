import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="container">
          <p> 
          माता-पिता ये मात्र शब्द नहीं, अपने आप में संपूर्ण संसार का पर्याय हैं। धरती पर माता-पिता अनमोल हैं। कोई भी और कुछ भी हमारे माता-पिता से पैदा हुए शून्य को नहीं भर सकता।
जीवन में ईमानदारी, कठोर परिश्रम एवं निःस्वार्थ भाव से लोक मंगल के लिए समर्पित भाव के साथ कार्य करने का संस्कार बचपन में आपने दिया, वो आपके त्याग, समर्पण और प्रेम का ही परिणाम है। मैं अपने माता-पिता को कोटि-कोटि नमन करते हुए उन्हें यह भजन भक्ति माला का संकलन श्रद्धा-सुमन के रूप में समर्पित करती हूं।
          </p>
          <br/>
          {/* <p>
           <h1><strong>भजन भक्ति माला</strong></h1>
          </p> */}
          
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`भजन भक्ति माला`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
