import React from 'react';
import { Helmet } from 'react-helmet-async';
import Disclaimer from '../components/Disclaimer';

const DisclaimerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Important Information | Compount.xyz</title>
        <meta name="description" content="Important disclaimer and legal information about using our compound interest calculator and financial planning tools." />
        <meta name="keywords" content="disclaimer, legal information, financial advice disclaimer, investment disclaimer" />
        <link rel="canonical" href="https://compount.xyz/disclaimer" />
        <meta property="og:title" content="Disclaimer - Important Information" />
        <meta property="og:description" content="Important disclaimer and legal information about using our compound interest calculator." />
        <meta property="og:url" content="https://compount.xyz/disclaimer" />
      </Helmet>
      <Disclaimer />
    </>
  );
};

export default DisclaimerPage;