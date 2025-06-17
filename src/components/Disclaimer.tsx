import React from 'react';
import { AlertTriangle, Shield, Info } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Important Disclaimer
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Please read this disclaimer carefully before using our compound interest calculator 
          and any information provided on this website.
        </p>
      </section>

      {/* Main Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Educational Tool Only
            </h2>
            <p className="text-amber-800 leading-relaxed">
              This compound interest calculator is provided for educational and informational 
              purposes only. It is designed to help users understand how compound interest works 
              and to provide estimates based on the input values provided. The results are 
              hypothetical and should not be considered as financial advice, investment 
              recommendations, or guarantees of future performance.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Disclaimers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <Info className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-slate-900">No Financial Advice</h3>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>We do not provide financial, investment, or legal advice</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Always consult with qualified financial advisors before making investment decisions</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your individual financial situation may require personalized guidance</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Consider your risk tolerance, time horizon, and financial goals</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-emerald-600" />
            <h3 className="text-xl font-semibold text-slate-900">Accuracy & Limitations</h3>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Calculations are based on simplified mathematical formulas</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Real-world results may vary due to fees, taxes, and market conditions</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Past performance does not guarantee future results</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Market volatility and economic factors can impact actual returns</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Investment Risks */}
      <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Understanding Investment Risks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
            <div className="text-3xl mb-3">⚠️</div>
            <h3 className="font-semibold text-red-900 mb-2">Market Risk</h3>
            <p className="text-sm text-red-800">
              Investment values can fluctuate due to market conditions and economic factors.
            </p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-orange-900 mb-2">Inflation Risk</h3>
            <p className="text-sm text-orange-800">
              Rising prices may reduce the purchasing power of your returns over time.
            </p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl mb-3">🏦</div>
            <h3 className="font-semibold text-purple-900 mb-2">Interest Rate Risk</h3>
            <p className="text-sm text-purple-800">
              Changes in interest rates can affect the value of bonds and other investments.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">Important Considerations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <h4 className="font-medium mb-2">Before Investing:</h4>
              <ul className="space-y-1">
                <li>• Assess your financial goals and timeline</li>
                <li>• Understand your risk tolerance</li>
                <li>• Consider diversification strategies</li>
                <li>• Review all fees and expenses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tax Implications:</h4>
              <ul className="space-y-1">
                <li>• Interest may be subject to income tax</li>
                <li>• Consider tax-advantaged accounts</li>
                <li>• Consult a tax professional</li>
                <li>• Factor in your tax bracket</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liability Limitation */}
      <section className="bg-slate-900 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The creators and operators of this compound interest calculator make no warranties, 
            express or implied, regarding the accuracy, completeness, or reliability of the 
            information and calculations provided. We shall not be held liable for any direct, 
            indirect, incidental, special, or consequential damages arising from the use of 
            this calculator or any decisions made based on its results.
          </p>
          <p>
            Users assume full responsibility for any financial decisions made based on the 
            information provided by this tool. We strongly recommend consulting with qualified 
            financial professionals before making any investment or financial planning decisions.
          </p>
          <p className="text-sm font-medium text-amber-300">
            By using this calculator, you acknowledge that you have read, understood, and 
            agree to this disclaimer.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <div className="text-center text-sm text-slate-500">
        <p>This disclaimer was last updated on January 2025.</p>
      </div>
    </div>
  );
};

export default Disclaimer;