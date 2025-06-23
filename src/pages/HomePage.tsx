import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, DollarSign, BarChart3, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Master the Power of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {' '}Compound Interest
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Transform your financial future with our advanced compound interest calculator. 
            See how your money grows exponentially over time and make informed investment decisions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/calculator"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <Calculator className="h-5 w-5" />
            <span>Start Calculating</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/faq"
            className="border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Learn How It Works
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Advanced Calculator</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Calculate compound interest with monthly contributions, different compounding frequencies, 
            and detailed year-by-year breakdowns.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Scenario Comparison</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Compare different investment scenarios side-by-side to see how small changes 
            can lead to dramatically different outcomes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Visual Insights</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Interactive charts and breakdowns help you understand exactly how your 
            money grows and where your returns come from.
          </p>
        </div>
      </section>

      {/* Why Compound Interest Matters */}
      <section className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-blue-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Compound Interest is Called the 8th Wonder of the World
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Compound interest is the process where your money earns returns, and then those 
              returns earn returns. This creates exponential growth that can turn modest 
              investments into substantial wealth over time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Time is Your Greatest Asset</h4>
                  <p className="text-slate-600">Starting early, even with small amounts, can be more powerful than large investments made later.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Consistency Beats Perfection</h4>
                  <p className="text-slate-600">Regular monthly contributions often outperform trying to time the market perfectly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Exponential Growth</h4>
                  <p className="text-slate-600">The longer you invest, the more dramatic the compounding effect becomes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Example: The Power of Starting Early</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">Sarah (Age 25)</h4>
                <p className="text-slate-600 text-sm">Invests $200/month for 10 years, then stops</p>
                <p className="text-lg font-bold text-blue-600">Total at 65: $602,070</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-slate-900">Mike (Age 35)</h4>
                <p className="text-slate-600 text-sm">Invests $200/month for 30 years</p>
                <p className="text-lg font-bold text-red-600">Total at 65: $566,764</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <p className="text-amber-800 text-sm font-medium">
                  Sarah invested $24,000 total. Mike invested $72,000 total. 
                  Yet Sarah ended up with more money due to compound interest!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-slate-600">
            Start planning your financial future in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Enter Your Details</h3>
            <p className="text-slate-600">
              Input your starting amount, expected return rate, and investment timeline
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">See the Magic</h3>
            <p className="text-slate-600">
              Watch how compound interest transforms your money over time
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Make Informed Decisions</h3>
            <p className="text-slate-600">
              Use the insights to optimize your investment strategy
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/calculator"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <Calculator className="h-5 w-5" />
            <span>Try the Calculator Now</span>
          </Link>
        </div>
      </section>

      {/* Testimonials/Benefits */}
      <section className="text-center space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Thousands of Smart Investors
          </h2>
          <p className="text-xl text-slate-600">
            Join the community of people taking control of their financial future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Free to Use</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
            <div className="text-slate-600">Calculations Made</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-slate-600">Always Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
            <div className="text-slate-600">Personal Data Stored</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;