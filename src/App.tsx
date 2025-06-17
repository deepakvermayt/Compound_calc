import React, { useState } from 'react';
import { Calculator, Menu, X } from 'lucide-react';
import CompoundInterestCalculator from './components/CompoundInterestCalculator';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import Navigation from './components/Navigation';
import StructuredData from './components/StructuredData';

type Section = 'calculator' | 'faq' | 'disclaimer' | 'privacy' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('calculator');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'calculator':
        return <CompoundInterestCalculator />;
      case 'faq':
        return <FAQ />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'contact':
        return <ContactUs />;
      default:
        return <CompoundInterestCalculator />;
    }
  };

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Calculator className="h-8 w-8 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">
                  Compound Interest Calculator
                </h1>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Navigation 
                  activeSection={activeSection} 
                  setActiveSection={setActiveSection} 
                />
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-slate-200">
                <nav className="flex flex-col space-y-2">
                  <Navigation 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection}
                    mobile={true}
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calculator className="h-6 w-6 text-blue-400" />
                  <span className="font-semibold">Compound Interest Calculator</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Free online tool to calculate compound interest for your savings and investments. 
                  Make informed financial decisions with accurate calculations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <button 
                      onClick={() => setActiveSection('calculator')}
                      className="hover:text-white transition-colors"
                    >
                      Calculator
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('faq')}
                      className="hover:text-white transition-colors"
                    >
                      FAQ
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('contact')}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <button 
                      onClick={() => setActiveSection('disclaimer')}
                      className="hover:text-white transition-colors"
                    >
                      Disclaimer
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveSection('privacy')}
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
              <p>&copy; 2025 Compound Interest Calculator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;