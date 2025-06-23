import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compound Interest FAQ - Common Questions Answered | Compount.xyz</title>
        <meta name="description" content="Get answers to frequently asked questions about compound interest, how it works, and how to use it to build wealth over time." />
        <meta name="keywords" content="compound interest FAQ, investment questions, savings questions, financial planning help" />
        <link rel="canonical" href="https://compount.xyz/faq" />
        <meta property="og:title" content="Compound Interest FAQ - Common Questions Answered" />
        <meta property="og:description" content="Get answers to frequently asked questions about compound interest and investment planning." />
        <meta property="og:url" content="https://compount.xyz/faq" />
      </Helmet>
      <FAQ />
    </>
  );
};

export default FAQPage;