import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is compound interest?",
      answer: "Compound interest is the interest calculated on the initial principal plus all previously earned interest. Unlike simple interest, which is calculated only on the principal amount, compound interest allows your money to grow exponentially over time as you earn interest on your interest. This powerful financial concept is often called 'the eighth wonder of the world' because of its ability to significantly increase wealth over long periods."
    },
    {
      question: "How is compound interest calculated?",
      answer: "Compound interest is calculated using the formula: A = P(1 + r/n)^(nt), where A is the final amount, P is the principal amount, r is the annual interest rate (as a decimal), n is the number of times interest is compounded per year, and t is the number of years. For example, if you invest $1,000 at 5% annual interest compounded monthly for 10 years, your calculation would be: A = 1000(1 + 0.05/12)^(12×10) = $1,643.62."
    },
    {
      question: "What's the difference between compound and simple interest?",
      answer: "Simple interest is calculated only on the principal amount and remains constant throughout the investment period. Compound interest, however, is calculated on the principal plus any previously earned interest, causing the interest to 'compound' or grow over time. For example, with $1,000 at 5% for 10 years: simple interest would earn $500 total, while compound interest (monthly compounding) would earn $643.62 - that's $143.62 more!"
    },
    {
      question: "How often should interest be compounded for maximum growth?",
      answer: "Generally, the more frequently interest is compounded, the more you'll earn. Daily compounding will yield slightly more than monthly, which yields more than quarterly or annual compounding. However, the difference between daily and monthly compounding is usually minimal. Most savings accounts compound daily, while many investment accounts compound monthly or quarterly."
    },
    {
      question: "What are realistic interest rates for different investments?",
      answer: "Interest rates vary significantly by investment type: High-yield savings accounts: 0.5-5%, CDs: 1-5%, Government bonds: 2-4%, Corporate bonds: 3-7%, Stock market (historical average): 7-10%, Real estate: 8-12%. Remember, higher potential returns usually come with higher risk. Always consider your risk tolerance and investment timeline when choosing investments."
    },
    {
      question: "How long should I invest to see significant compound growth?",
      answer: "The power of compound interest becomes most apparent over longer time periods. While you'll see some growth in the first few years, the exponential effect really kicks in after 10-15 years. This is why financial advisors often recommend starting to invest as early as possible. Even small amounts invested in your 20s can grow to substantial sums by retirement age due to the extended compounding period."
    },
    {
      question: "Can I use this calculator for loans and debt?",
      answer: "Yes! This calculator works for any compound interest scenario. For loans, the 'principal' would be your loan amount, and the result shows how much you'd owe over time if you made no payments. This can help you understand the true cost of debt and why making extra principal payments early can save thousands in interest. Credit cards typically compound daily, making them particularly expensive if you only make minimum payments."
    },
    {
      question: "Is this calculator accurate for tax-advantaged accounts?",
      answer: "This calculator shows gross returns before taxes and fees. For tax-advantaged accounts like 401(k)s and IRAs, the calculations are more accurate since these accounts grow tax-deferred. For taxable accounts, remember that you may owe taxes on interest, dividends, and capital gains, which would reduce your actual returns. Investment fees also impact real returns, so factor in expense ratios and management fees when planning."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Compound Interest FAQ
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Get answers to the most common questions about compound interest, how it works, 
          and how to use it to build wealth over time.
        </p>
      </section>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {item.question}
                </h3>
              </div>
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-6">
                <div className="pl-8 pr-4">
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <section className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Ready to Start Calculating?
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Now that you understand how compound interest works, use our calculator to see 
          how your money can grow over time. Whether you're planning for retirement, 
          saving for a major purchase, or just curious about investment growth, 
          our tool makes it easy to visualize your financial future.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
            <span className="text-sm text-slate-600">💡 Tip: Start with small, consistent investments</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
            <span className="text-sm text-slate-600">📈 Remember: Time is your greatest asset</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
            <span className="text-sm text-slate-600">🎯 Goal: Let compound interest work for you</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;