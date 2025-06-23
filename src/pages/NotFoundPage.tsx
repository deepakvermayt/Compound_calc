import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator, HelpCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-slate-900">404</h1>
          <h2 className="text-3xl font-bold text-slate-700">Page Not Found</h2>
          <p className="text-xl text-slate-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all inline-flex items-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          <Link
            to="/calculator"
            className="border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all inline-flex items-center space-x-2"
          >
            <Calculator className="h-5 w-5" />
            <span>Use Calculator</span>
          </Link>
          <Link
            to="/faq"
            className="border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all inline-flex items-center space-x-2"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Get Help</span>
          </Link>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <Link to="/calculator" className="text-blue-600 hover:text-blue-700 transition-colors">
              Compound Interest Calculator
            </Link>
            <Link to="/faq" className="text-blue-600 hover:text-blue-700 transition-colors">
              Frequently Asked Questions
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 transition-colors">
              Contact & Support
            </Link>
            <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;