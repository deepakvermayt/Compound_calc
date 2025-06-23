import React from 'react';
import { Helmet } from 'react-helmet-async';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - How We Protect Your Data | Compount.xyz</title>
        <meta name="description" content="Learn how we protect your privacy and handle your data when using our compound interest calculator and website." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, privacy rights" />
        <link rel="canonical" href="https://compount.xyz/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - How We Protect Your Data" />
        <meta property="og:description" content="Learn how we protect your privacy and handle your data when using our website." />
        <meta property="og:url" content="https://compount.xyz/privacy-policy" />
      </Helmet>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;