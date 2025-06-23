import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUs from '../components/ContactUs';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get Help & Support | Compount.xyz</title>
        <meta name="description" content="Contact us for help with our compound interest calculator, financial planning questions, or technical support. We're here to help!" />
        <meta name="keywords" content="contact us, customer support, help, financial planning help, calculator support" />
        <link rel="canonical" href="https://compount.xyz/contact" />
        <meta property="og:title" content="Contact Us - Get Help & Support" />
        <meta property="og:description" content="Contact us for help with our compound interest calculator and financial planning questions." />
        <meta property="og:url" content="https://compount.xyz/contact" />
      </Helmet>
      <ContactUs />
    </>
  );
};

export default ContactPage;