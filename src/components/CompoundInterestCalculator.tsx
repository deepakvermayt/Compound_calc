import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent, BarChart3, PieChart, Info } from 'lucide-react';

interface CalculatorInputs {
  principal: number;
  rate: number;
  time: number;
  frequency: number;
  monthlyContribution: number;
}

interface CalculationResult {
  finalAmount: number;
  interestEarned: number;
  totalContributions: number;
  monthlyBreakdown: Array<{
    year: number;
    balance: number;
    interestEarned: number;
    totalContributions: number;
  }>;
}

const CompoundInterestCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    principal: 10000,
    rate: 7,
    time: 10,
    frequency: 12,
    monthlyContribution: 500
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'breakdown' | 'comparison'>('summary');

  const frequencyOptions = [
    { value: 1, label: 'Annually' },
    { value: 4, label: 'Quarterly' },
    { value: 12, label: 'Monthly' },
    { value: 365, label: 'Daily' }
  ];

  const result = useMemo((): CalculationResult => {
    const { principal, rate, time, frequency, monthlyContribution } = inputs;
    const r = rate / 100;
    const monthlyRate = r / 12;
    const totalMonths = time * 12;
    
    let balance = principal;
    let totalContributions = principal;
    let totalInterest = 0;
    const monthlyBreakdown = [];

    // Calculate compound interest with monthly contributions
    for (let month = 1; month <= totalMonths; month++) {
      // Add monthly contribution
      if (month > 0) {
        balance += monthlyContribution;
        totalContributions += monthlyContribution;
      }
      
      // Apply compound interest
      const monthlyInterest = balance * (monthlyRate / (frequency / 12));
      balance += monthlyInterest;
      totalInterest += monthlyInterest;

      // Store yearly breakdown
      if (month % 12 === 0) {
        monthlyBreakdown.push({
          year: Math.floor(month / 12),
          balance: balance,
          interestEarned: totalInterest,
          totalContributions: totalContributions
        });
      }
    }

    return {
      finalAmount: balance,
      interestEarned: totalInterest,
      totalContributions: totalContributions,
      monthlyBreakdown
    };
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (ratio: number): string => {
    return `${(ratio * 100).toFixed(1)}%`;
  };

  // Calculate comparison scenarios
  const comparisonScenarios = useMemo(() => {
    const baseInputs = { ...inputs };
    return [
      {
        name: 'No Monthly Contributions',
        inputs: { ...baseInputs, monthlyContribution: 0 },
        result: (() => {
          const amount = baseInputs.principal * Math.pow(1 + baseInputs.rate / 100 / baseInputs.frequency, baseInputs.frequency * baseInputs.time);
          return {
            finalAmount: amount,
            interestEarned: amount - baseInputs.principal,
            totalContributions: baseInputs.principal
          };
        })()
      },
      {
        name: 'Lower Interest Rate (5%)',
        inputs: { ...baseInputs, rate: 5 },
        result: (() => {
          let balance = baseInputs.principal;
          let totalContributions = baseInputs.principal;
          const monthlyRate = 0.05 / 12;
          const totalMonths = baseInputs.time * 12;
          
          for (let month = 1; month <= totalMonths; month++) {
            if (month > 0) {
              balance += baseInputs.monthlyContribution;
              totalContributions += baseInputs.monthlyContribution;
            }
            balance += balance * monthlyRate;
          }
          
          return {
            finalAmount: balance,
            interestEarned: balance - totalContributions,
            totalContributions
          };
        })()
      },
      {
        name: 'Higher Interest Rate (10%)',
        inputs: { ...baseInputs, rate: 10 },
        result: (() => {
          let balance = baseInputs.principal;
          let totalContributions = baseInputs.principal;
          const monthlyRate = 0.10 / 12;
          const totalMonths = baseInputs.time * 12;
          
          for (let month = 1; month <= totalMonths; month++) {
            if (month > 0) {
              balance += baseInputs.monthlyContribution;
              totalContributions += baseInputs.monthlyContribution;
            }
            balance += balance * monthlyRate;
          }
          
          return {
            finalAmount: balance,
            interestEarned: balance - totalContributions,
            totalContributions
          };
        })()
      }
    ];
  }, [inputs]);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Advanced Compound Interest Calculator
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Harness the power of compound interest to grow your wealth over time. Our advanced calculator 
          includes monthly contributions, detailed breakdowns, and scenario comparisons to help you make 
          informed financial decisions. Whether you're planning for retirement, saving for a major purchase, 
          or exploring investment opportunities, compound interest is one of the most powerful tools in building 
          long-term wealth. Einstein allegedly called it "the eighth wonder of the world" – and for good reason.
        </p>
      </section>

      {/* Calculator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
            Calculator Inputs
          </h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="principal" className="block text-sm font-semibold text-slate-700 mb-2">
                Initial Principal Amount ($)
              </label>
              <input
                type="number"
                id="principal"
                value={inputs.principal}
                onChange={(e) => handleInputChange('principal', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                min="0"
                step="100"
              />
              <p className="text-xs text-slate-500 mt-1">Your starting investment or savings amount</p>
            </div>

            <div>
              <label htmlFor="rate" className="block text-sm font-semibold text-slate-700 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                id="rate"
                value={inputs.rate}
                onChange={(e) => handleInputChange('rate', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                min="0"
                max="100"
                step="0.1"
              />
              <p className="text-xs text-slate-500 mt-1">Expected annual return (7-10% is typical for long-term investments)</p>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-slate-700 mb-2">
                Investment Time Period (Years)
              </label>
              <input
                type="number"
                id="time"
                value={inputs.time}
                onChange={(e) => handleInputChange('time', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                min="1"
                max="100"
                step="1"
              />
              <p className="text-xs text-slate-500 mt-1">Longer periods show the true power of compounding</p>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-semibold text-slate-700 mb-2">
                Compounding Frequency
              </label>
              <select
                id="frequency"
                value={inputs.frequency}
                onChange={(e) => handleInputChange('frequency', Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg bg-white"
              >
                {frequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">More frequent compounding = higher returns</p>
            </div>

            {/* Advanced Options */}
            <div className="border-t border-slate-200 pt-6">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <Info className="h-4 w-4" />
                <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Options</span>
              </button>
              
              {showAdvanced && (
                <div className="mt-4">
                  <label htmlFor="monthlyContribution" className="block text-sm font-semibold text-slate-700 mb-2">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    id="monthlyContribution"
                    value={inputs.monthlyContribution}
                    onChange={(e) => handleInputChange('monthlyContribution', Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                    min="0"
                    step="50"
                  />
                  <p className="text-xs text-slate-500 mt-1">Regular monthly additions to your investment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl shadow-lg p-6 md:p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-emerald-600 mr-2" />
            Your Results
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Final Amount</span>
                <Calendar className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-slate-900">
                {formatCurrency(result.finalAmount)}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                {formatPercentage((result.finalAmount - result.totalContributions) / result.totalContributions)} total return
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Interest Earned</span>
                <Percent className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-bold text-emerald-600">
                {formatCurrency(result.interestEarned)}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                {formatPercentage(result.interestEarned / result.finalAmount)} of final amount
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Total Contributions</span>
                <DollarSign className="h-4 w-4 text-slate-500" />
              </div>
              <div className="text-3xl font-bold text-slate-700">
                {formatCurrency(result.totalContributions)}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Initial: {formatCurrency(inputs.principal)} + Monthly: {formatCurrency(inputs.monthlyContribution * inputs.time * 12)}
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <PieChart className="h-5 w-5 text-purple-600 mr-2" />
                Money Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Principal</span>
                  </div>
                  <span className="text-sm font-medium">{formatCurrency(inputs.principal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Monthly Contributions</span>
                  </div>
                  <span className="text-sm font-medium">{formatCurrency(inputs.monthlyContribution * inputs.time * 12)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Interest Earned</span>
                  </div>
                  <span className="text-sm font-medium">{formatCurrency(result.interestEarned)}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white p-6">
              <h3 className="font-semibold mb-2">Summary</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Starting with {formatCurrency(inputs.principal)} and adding{' '}
                {formatCurrency(inputs.monthlyContribution)} monthly for {inputs.time} years at{' '}
                {inputs.rate}% annual interest will grow to{' '}
                <span className="font-semibold">{formatCurrency(result.finalAmount)}</span>.
                You'll earn {formatCurrency(result.interestEarned)} in compound interest!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Tabs */}
      <section className="bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'summary', label: 'Summary', icon: BarChart3 },
              { key: 'breakdown', label: 'Year-by-Year', icon: Calendar },
              { key: 'comparison', label: 'Scenarios', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 md:p-8">
          {activeTab === 'summary' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Investment Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{inputs.time}</div>
                  <div className="text-sm text-blue-800">Years Invested</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{inputs.rate}%</div>
                  <div className="text-sm text-green-800">Annual Return</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">
                    {formatPercentage(result.interestEarned / result.totalContributions)}
                  </div>
                  <div className="text-sm text-purple-800">Effective Gain</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(result.finalAmount / result.totalContributions * 10) / 10}x
                  </div>
                  <div className="text-sm text-orange-800">Money Multiplier</div>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Insights</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Your money will grow by <strong>{formatPercentage((result.finalAmount - result.totalContributions) / result.totalContributions)}</strong> over {inputs.time} years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Monthly contributions of <strong>{formatCurrency(inputs.monthlyContribution)}</strong> add up to <strong>{formatCurrency(inputs.monthlyContribution * inputs.time * 12)}</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Compound interest earns you <strong>{formatCurrency(result.interestEarned)}</strong> without additional work</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">💡</span>
                    <span>Starting early and staying consistent maximizes the compounding effect</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'breakdown' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Year-by-Year Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Balance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Interest Earned</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Total Contributions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Growth</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {result.monthlyBreakdown.map((year) => (
                      <tr key={year.year} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {year.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                          {formatCurrency(year.balance)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-600 font-medium">
                          {formatCurrency(year.interestEarned)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                          {formatCurrency(year.totalContributions)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                          {formatPercentage((year.balance - year.totalContributions) / year.totalContributions)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'comparison' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Scenario Comparison</h3>
              <p className="text-slate-600">
                See how different choices affect your investment outcome:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisonScenarios.map((scenario, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">{scenario.name}</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-slate-600">Final Amount</div>
                        <div className="text-xl font-bold text-slate-900">
                          {formatCurrency(scenario.result.finalAmount)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Interest Earned</div>
                        <div className="text-lg font-semibold text-emerald-600">
                          {formatCurrency(scenario.result.interestEarned)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">vs. Your Plan</div>
                        <div className={`text-sm font-medium ${
                          scenario.result.finalAmount > result.finalAmount 
                            ? 'text-green-600' 
                            : scenario.result.finalAmount < result.finalAmount 
                            ? 'text-red-600' 
                            : 'text-slate-600'
                        }`}>
                          {scenario.result.finalAmount > result.finalAmount ? '+' : ''}
                          {formatCurrency(scenario.result.finalAmount - result.finalAmount)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          How to Use the Compound Interest Calculator
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Enter Your Principal Amount</h3>
                <p className="text-slate-600 text-sm">
                  Input the initial amount you plan to invest or save. This could be a lump sum 
                  or your starting balance. Even small amounts can grow significantly over time.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Set the Interest Rate</h3>
                <p className="text-slate-600 text-sm">
                  Enter the expected annual interest rate as a percentage. For savings accounts, 
                  this might be 1-3%. For investments, historical averages range from 7-10%. 
                  Be realistic with your expectations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Choose Time Period</h3>
                <p className="text-slate-600 text-sm">
                  Specify how many years you plan to keep your money invested. Longer time 
                  periods show the true power of compounding. Time is your greatest ally in investing.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Select Compounding Frequency</h3>
                <p className="text-slate-600 text-sm">
                  Choose how often interest is calculated and added to your balance. 
                  More frequent compounding leads to higher returns, though the difference 
                  between daily and monthly is usually small.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Add Monthly Contributions</h3>
                <p className="text-slate-600 text-sm">
                  Use the advanced options to include regular monthly contributions. 
                  Consistent investing, even small amounts, can dramatically increase 
                  your final outcome due to dollar-cost averaging.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">6</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Analyze the Results</h3>
                <p className="text-slate-600 text-sm">
                  Review the detailed breakdown, compare different scenarios, and use 
                  the insights to make informed investment decisions. The year-by-year 
                  breakdown shows how your wealth builds over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">Pro Tips for Maximum Growth</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 text-sm">
            <div>
              <h4 className="font-medium mb-2">🚀 Start Early:</h4>
              <p>Time is your most powerful tool. Starting 10 years earlier can be worth more than doubling your contributions later.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">💰 Consistent Contributions:</h4>
              <p>Regular monthly investments often outperform trying to time the market with large, infrequent contributions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompoundInterestCalculator;