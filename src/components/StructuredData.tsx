import React from 'react';

const StructuredData: React.FC = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Compound Interest Calculator",
    "description": "Free online compound interest calculator for savings and investment planning. Calculate how your money grows over time with compound interest.",
    "url": "https://www.compount.xyz/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.compount.xyz/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Compound Interest Calculator",
    "description": "Providing free financial calculators and educational resources for personal finance management.",
    "url": "https://www.compount.xyz/",
    "logo": "https://www.compount.xyz/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "codewithrajiv@gmail.com",
      "availableLanguage": "English"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Compound Interest Calculator",
    "description": "Calculate compound interest for your savings and investments. Free, accurate, and easy to use online calculator.",
    "url": "https://www.compount.xyz/",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Compound interest calculations",
      "Multiple compounding frequencies",
      "Investment growth projections",
      "Savings planning tool",
      "Educational resources"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is compound interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compound interest is the interest calculated on the initial principal plus all previously earned interest. Unlike simple interest, which is calculated only on the principal amount, compound interest allows your money to grow exponentially over time as you earn interest on your interest. This powerful financial concept is often called 'the eighth wonder of the world' because of its ability to significantly increase wealth over long periods."
        }
      },
      {
        "@type": "Question",
        "name": "How is compound interest calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compound interest is calculated using the formula: A = P(1 + r/n)^(nt), where A is the final amount, P is the principal amount, r is the annual interest rate (as a decimal), n is the number of times interest is compounded per year, and t is the number of years. For example, if you invest $1,000 at 5% annual interest compounded monthly for 10 years, your calculation would be: A = 1000(1 + 0.05/12)^(12×10) = $1,643.62."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between compound and simple interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple interest is calculated only on the principal amount and remains constant throughout the investment period. Compound interest, however, is calculated on the principal plus any previously earned interest, causing the interest to 'compound' or grow over time. For example, with $1,000 at 5% for 10 years: simple interest would earn $500 total, while compound interest (monthly compounding) would earn $643.62 - that's $143.62 more!"
        }
      },
      {
        "@type": "Question",
        "name": "How often should interest be compounded for maximum growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, the more frequently interest is compounded, the more you'll earn. Daily compounding will yield slightly more than monthly, which yields more than quarterly or annual compounding. However, the difference between daily and monthly compounding is usually minimal. Most savings accounts compound daily, while many investment accounts compound monthly or quarterly."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.compount.xyz/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculator",
        "item": "https://www.compount.xyz/calculator"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Compound Interest Calculator",
    "description": "Step-by-step guide to using our compound interest calculator to plan your savings and investments.",
    "image": "https://www.compount.xyz/images/calculator-guide.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Your Principal Amount",
        "text": "Input the initial amount you plan to invest or save. This could be a lump sum or your starting balance.",
        "image": "https://www.compount.xyz/images/step1.png"
      },
      {
        "@type": "HowToStep",
        "name": "Set the Interest Rate",
        "text": "Enter the expected annual interest rate as a percentage. For savings accounts, this might be 1-3%. For investments, historical averages range from 7-10%.",
        "image": "https://www.compount.xyz/images/step2.png"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Time Period",
        "text": "Specify how many years you plan to keep your money invested. Longer time periods show the true power of compounding.",
        "image": "https://www.compount.xyz/images/step3.png"
      },
      {
        "@type": "HowToStep",
        "name": "Select Compounding Frequency",
        "text": "Choose how often interest is calculated and added to your balance. More frequent compounding leads to higher returns.",
        "image": "https://www.compount.xyz/images/step4.png"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
};

export default StructuredData;