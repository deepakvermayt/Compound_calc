import React from 'react';
import { Helmet } from 'react-helmet-async';
import CompoundInterestCalculator from '../components/CompoundInterestCalculator';

const CalculatorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compound Interest Calculator - Free Investment Growth Tool | Compount.xyz</title>
        <meta name="description" content="Calculate compound interest with our advanced free calculator. Includes monthly contributions, detailed breakdowns, and scenario comparisons for smart investment planning." />
        <meta name="keywords" content="compound interest calculator, investment calculator, savings calculator, retirement planning, financial planning" />
        <link rel="canonical" href="https://compount.xyz/calculator" />
        <meta property="og:title" content="Compound Interest Calculator - Free Investment Growth Tool" />
        <meta property="og:description" content="Calculate compound interest with our advanced free calculator. Includes monthly contributions, detailed breakdowns, and scenario comparisons." />
        <meta property="og:url" content="https://compount.xyz/calculator" />
      </Helmet>
      <CompoundInterestCalculator />
    </>
  );
};

export default CalculatorPage;